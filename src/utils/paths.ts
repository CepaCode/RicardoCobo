const base = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export const withBase = (path: string) => {
  const normalizedPath = path.replace(/^\//, "");
  return `${base}${normalizedPath}`;
};

export const mediaPath = (path: string) => {
  const normalizedPath = path.replace(/^\//, "").replace(/^media\//, "");
  return withBase(`media/${normalizedPath}`);
};