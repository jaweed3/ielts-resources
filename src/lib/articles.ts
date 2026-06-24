const METADATA_RE = [
  /^\d+\.?\d*$/,           // rating (3.4, 3.7, etc.)
  /^_\(\d[\d,]*\s*votes?\)_$/, // vote count
  /^\[.*\]\(.*\)$/,        // markdown link
  /^\d+,\d+$/,             // view count
  /^\d{1,2}\/\d{1,2}\/\d{4}$/, // date
  /^#\w+$/,                // hashtag tag
  /^[📌👉🟢🟠🔴⬇️⬆️\s]*$/, // emoji-only
];

function isMetadata(line: string): boolean {
  const t = line.trim();
  if (!t) return false;
  return METADATA_RE.some((re) => re.test(t));
}

function isHeadingLine(line: string): boolean {
  const t = line.trim();
  return /^#{1,4}\s/.test(t) || /^\*\*[^*]+\*\*$/.test(t) || /^__[^_]+__$/.test(t);
}

function hasBoldPrefix(line: string): boolean {
  return line.trim().startsWith("**");
}

function hasHeadingPrefix(line: string): boolean {
  return /^#{1,4}\s/.test(line.trim());
}

export function cleanArticle(raw: string): {
  title: string;
  content: string;
  category: string;
  source: string;
} {
  const parts = raw.split("---");
  if (parts.length < 2) {
    return { title: "", content: raw, category: "unknown", source: "#" };
  }

  const lines = parts.slice(1).join("---").split("\n");
  const titleMatch = raw.match(/^#\s+(.+)/m);
  const title = titleMatch ? titleMatch[1].trim() : "";

  const titleLineIndex = lines.findIndex((l) => /^###\s/.test(l.trim()));

  let startIdx = 0;
  if (titleLineIndex >= 0) {
    startIdx = titleLineIndex + 1;
    while (startIdx < lines.length) {
      const t = lines[startIdx].trim();
      if (t && !isMetadata(lines[startIdx]) && !t.startsWith("![")) break;
      startIdx++;
    }
  } else {
    for (let i = 10; i < lines.length; i++) {
      const t = lines[i].trim();
      if (t && !isMetadata(lines[i]) && !t.startsWith("![")) {
        startIdx = i;
        break;
      }
    }
  }

  let contentLines: string[] = [];
  for (let i = startIdx; i < lines.length; i++) {
    const line = lines[i].trimEnd();

    if (
      line.startsWith("[Previous:") ||
      line.startsWith("### Share") ||
      line.startsWith("Previous:") ||
      line.startsWith("Nhận xét")
    )
      break;

    if (!line) {
      contentLines.push("");
      continue;
    }

    const trimmed = line.trim();
    if (isMetadata(lines[i])) continue;
    if (trimmed.startsWith("![")) continue;

    contentLines.push(line);
  }

  let content = contentLines.join("\n");

  content = content
    .replace(/^(\d+)\.(\S)/gm, "$1. $2")
    .replace(/^(\d+)\)(\S)/gm, "$1) $2")
    .replace(/\u00a0/g, " ")
    .replace(/\u200b/g, "");

  content = ensureParagraphSeparation(content);

  const category = raw.includes("writing-tips")
    ? "writing"
    : raw.includes("reading-tips")
      ? "reading"
      : raw.includes("listening-tips")
        ? "listening"
        : "unknown";
  const sourceMatch = raw.match(/^source:\s+(.+)/m);
  const source = sourceMatch ? sourceMatch[1].trim() : "#";

  return { title, content, category, source };
}

function ensureParagraphSeparation(md: string): string {
  const lines = md.split("\n");
  const result: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const prev = i > 0 ? lines[i - 1] : "";
    const next = i < lines.length - 1 ? lines[i + 1] : "";

    result.push(line);

    if (!line.trim()) continue;
    if (!next.trim()) continue;

    const lineIsHeading = hasBoldPrefix(line) || hasHeadingPrefix(line);
    const nextIsHeading = hasBoldPrefix(next) || hasHeadingPrefix(next);

    const lineEndsSentence = /[.?!:]$/.test(line.trim());
    const nextStartsCapital = /^[A-Z#*]/.test(next.trim());

    const bothNonEmpty = line.trim() && next.trim();

    if (nextIsHeading && bothNonEmpty) {
      if (!next.startsWith("---") && !line.startsWith("---")) {
        result.push("");
      }
    } else if (
      lineIsHeading &&
      bothNonEmpty &&
      !nextIsHeading &&
      !next.startsWith("-") &&
      !next.startsWith("*") &&
      !/^\d+[.)]/.test(next.trim())
    ) {
      result.push("");
    } else if (lineEndsSentence && nextStartsCapital && bothNonEmpty) {
      result.push("");
    } else if (
      /^\d+[.)]/.test(line.trim()) &&
      bothNonEmpty &&
      !/^\d+[.)]/.test(next.trim()) &&
      !nextIsHeading
    ) {
      result.push("");
    }
  }

  return result.join("\n");
}
