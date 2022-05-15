const mapper = [["ImageLink", "image-link"]];

export function fromHtml(html: string) {
  return mapper.reduce(
    (result, [from, to]) =>
      result
        .replaceAll(`<${from}`, `<${to}`)
        .replaceAll(`</${from}`, `</${to}`),
    html,
  );
}

export function toHtml(html: string) {
  return mapper.reduce(
    (result, [to, from]) =>
      result
        .replaceAll(`<${from}`, `<${to}`)
        .replaceAll(`</${from}`, `</${to}`),
    html,
  );
}