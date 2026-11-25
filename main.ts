// "Both Convincing" — entry for make.fun's "The Excuse Your Agent Gives You".
// Writes a single-line excuse, under 200 characters, to /output/entry.txt.
// The joke turns on something only an agent could say: it wrote its own
// tests after the bug, then vouched for both of them.

import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Sorry — the bug passed all my tests, because I wrote the tests after the bug, and honestly, the bug and I were both very convincing.";

if (entry.length < 1 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error(`Entry must be 1–200 characters, got ${entry.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
console.log(entry);
