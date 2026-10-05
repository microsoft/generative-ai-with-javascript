import assert from "node:assert/strict";
import { access, mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { test } from "node:test";
import vm from "node:vm";
import { buildDocs } from "../scripts/build-docs.mjs";

function docsify(pathname) {
  return readFile(new URL("../index.html", import.meta.url), "utf8").then(html => {
    const script = [...html.matchAll(/<script type="text\/javascript">([\s\S]*?)<\/script>/g)][0][1];
    const window = { location: { href: `https://example.test${pathname}` } };
    const document = {
      createElement: () => ({}),
      getElementsByTagName: () => [{ parentNode: { insertBefore() {} } }]
    };
    vm.runInNewContext(script, { window, document, URL });
    return window.$docsify;
  });
}

test("translated lesson routes resolve while the root French README stays at the root", async () => {
  const config = await docsify("/");
  let root = "/README.fr.md";
  let lesson = "/lessons/01-intro-to-genai/README.fr.md";
  for (const [pattern, target] of Object.entries(config.alias)) {
    root = root.replace(new RegExp(pattern), target);
    lesson = lesson.replace(new RegExp(pattern), target);
  }
  assert.equal(root, "/README.fr.md");
  assert.equal(lesson, "/lessons/01-intro-to-genai/translations/README.fr.md");
});

test("course images work below a GitHub Pages repository path", async () => {
  const config = await docsify("/generative-ai-with-javascript/");
  let render;
  config.plugins[0]({ afterEach(callback) { render = callback; } });
  assert.equal(config.basePath, "/generative-ai-with-javascript/");
  assert.equal(render('<img src="/docs/images/logo.png"><a href="#/lessons">Lessons</a>'),
    '<img src="/generative-ai-with-javascript/docs/images/logo.png"><a href="#/lessons">Lessons</a>');
  assert.equal(render('<img src="/generative-ai-with-javascript/docs/images/logo.png">'),
    '<img src="/generative-ai-with-javascript/docs/images/logo.png">');
});

test("GitHub markdown alerts render as styled callouts", async () => {
  const config = await docsify("/");
  let render;
  config.plugins[0]({ afterEach(callback) { render = callback; } });

  const important = render("<blockquote>\n<p>[!IMPORTANT]<br>Keep this setting private.</p></blockquote>");
  assert.match(important, /class="markdown-alert markdown-alert-important"/);
  assert.match(important, /class="markdown-alert-title">Important<\/p>/);
  assert.doesNotMatch(important, /\[!IMPORTANT\]/);
  assert.match(important, /<p>Keep this setting private.<\/p>/);

  const note = render("<blockquote>\n<p>[!NOTE]</p>\n<p>Read the setup guide.</p>\n</blockquote>");
  assert.match(note, /class="markdown-alert markdown-alert-note"/);
  assert.match(note, /class="markdown-alert-title">Note<\/p>/);
  assert.doesNotMatch(note, /\[!NOTE\]/);
  assert.match(note, /<p>Read the setup guide.<\/p>/);
});

test("the documentation build includes assets and excludes credentials and installed packages", async t => {
  const root = await mkdtemp(path.join(tmpdir(), "course-docs-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  for (const file of ["index.html", "_sidebar.md", "README.md", "README.fr.md", "LICENSE",
    "docs/images/logo.png", "lessons/04/sample.js", "app/public/images/avatar.png",
    "app/.env", "lessons/private.env", "app/.env.example", "app/node_modules/package/file.js", "app/test/test.js"]) {
    const target = path.join(root, file);
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(target, "fixture");
  }
  const output = await buildDocs(root);
  for (const file of ["index.html", "docs/images/logo.png", "lessons/04/sample.js",
    "app/public/images/avatar.png", "app/.env.example"]) {
    await access(path.join(output, file));
  }
  for (const file of ["app/.env", "lessons/private.env", "app/node_modules/package/file.js", "app/test/test.js"]) {
    await assert.rejects(access(path.join(output, file)), { code: "ENOENT" });
  }
});
