export function getRedirectUrl(
  protocol: string,
  hostname: string,
  short: string
): string {
  return `${protocol}://${hostname}/short-url/${short}`
}
