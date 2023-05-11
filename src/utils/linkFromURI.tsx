export default function linkFromURI(uri: string) {
  if (!uri) return '';
  const [, type, id] = uri.split(':');
  return `/${type}/${id}`;
}
