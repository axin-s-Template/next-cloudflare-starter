const fs = require("node:fs");
const path = require("node:path");

const targets = [
	"node_modules/next/dist/server/node-environment-extensions/fast-set-immediate.external.js",
	"node_modules/next/dist/esm/server/node-environment-extensions/fast-set-immediate.external.js",
];

const needle = "nodeTimersPromises.setImmediate = patchedSetImmediatePromise;";
const replacement = [
	"        try {",
	"            nodeTimersPromises.setImmediate = patchedSetImmediatePromise;",
	"        } catch (_err) {",
	"            // Ignore read-only module namespace objects (e.g. Workers)",
	"        }",
].join("\n");

let patchedAny = false;

for (const rel of targets) {
	const file = path.resolve(process.cwd(), rel);
	if (!fs.existsSync(file)) {
		continue;
	}
	const text = fs.readFileSync(file, "utf8");
	if (text.includes(replacement)) {
		continue;
	}
	if (!text.includes(needle)) {
		continue;
	}
	const nextText = text.replace(needle, replacement);
	fs.writeFileSync(file, nextText);
	patchedAny = true;
}

if (!patchedAny) {
	console.log("[patch-next-setimmediate] no changes needed");
} else {
	console.log("[patch-next-setimmediate] patched Next.js fast setImmediate");
}
