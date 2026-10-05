const originalFetch = globalThis.fetch;
globalThis.fetch = (input, options) => {
  const url = typeof input === "string" ? input : input instanceof URL ? input.href : input.url;
  if (url.startsWith("https://en.wikipedia.org/w/api.php")) {
    return Promise.resolve(Response.json({
      query: { pages: { 1: { extract: "Tim Berners-Lee created the Web to share information between researchers." } } }
    }));
  }
  return originalFetch(input, options);
};
