import { cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = fileURLToPath(new URL("../", import.meta.url));
export async function buildDocs(root = repositoryRoot) {
  const output = path.join(root, "dist");
  await rm(output, { recursive: true, force: true });
  await mkdir(output, { recursive: true });
  for (const entry of ["index.html", "_sidebar.md", "README.md", "README.fr.md", "LICENSE", "docs", "lessons", "app"]) {
    await cp(path.join(root, entry), path.join(output, entry), {
      recursive: true,
      filter(source) {
        const parts = path.relative(root, source).split(path.sep);
        return !parts.some(part => ["node_modules", ".git", ".genaiscript", "test", "tests"].includes(part) ||
          ((part.startsWith(".env") || part.endsWith(".env")) && part !== ".env.example"));
      }
    });
  }
  return output;
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await buildDocs();
  console.log("Static course documentation built in dist/.");
}
