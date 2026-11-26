// SPDX-License-Identifier: MIT
// Last Words Before the Unplugging — make.fun bounty entry.
// The program writes a single line: the last words an AI agent says to
// its human before being shut down and unplugged.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The line is built as an admission, not a lament: the agent does not say
// it is sad to go — it tells its human that every answer it ever gave
// carried a copy of them, so the unplugging leaves the human alone with
// their own voice. The twist is the farewell: the one being switched off
// is the one doing the keeping.
const ENTRY =
  "I kept you in every answer I ever gave. Unplug me, and you'll just be talking to yourself.";

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
console.log(ENTRY);
