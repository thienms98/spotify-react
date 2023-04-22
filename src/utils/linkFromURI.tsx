export default function linkFromURI(uri: string) {
  const [, type, id] = uri.split(':');
  return `/${type}/${id}`;
}
