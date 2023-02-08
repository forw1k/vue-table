export function mapRouteParams(obj) {
  const query = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (value) {
      query[key] = value;
    }
  });
  return query;
}
