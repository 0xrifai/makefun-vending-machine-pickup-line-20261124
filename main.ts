import { mkdirSync, writeFileSync } from "node:fs";

// A vending machine flirting with a passer-by, in its own language:
// jammed coils, a low hum, and the exact-change light blinking.
const line =
  "I'm jammed, I'm humming, I'm flashing exact change only — and you're still the best thing that's dropped by today.";

function guard(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`line must be 1-200 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("line must be a single line");
  }
  if (text !== text.trimEnd()) {
    throw new Error("line must not end with trailing whitespace");
  }
}

guard(line);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`wrote ${line.length} characters to /output/entry.txt`);
