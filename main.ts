import { mkdirSync, writeFileSync } from "node:fs";

// One joke about crypto and trading life, capped at 200 characters.
// 50x leverage as a subscription service: the exchange keeps renewing
// it right up until it cancels your membership at the worst tick.
const joke =
  "My 50x leverage is a subscription service: the exchange auto-renews it, then cancels my membership at the worst possible tick.";

mkdirSync("/output", { recursive: true });

// The sealed scorer gates on 1–200 characters of UTF-8 text: fail loudly
// here rather than shipping an entry the judge never sees.
if (joke.length < 1 || joke.length > 200 || joke.trim().length === 0) {
  throw new Error(`joke is ${joke.length} characters; must be 1-200`);
}
writeFileSync("/output/entry.txt", joke, "utf8");
