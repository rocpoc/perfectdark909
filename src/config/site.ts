export const SITE_URL = "https://perfectdark909.com";
export const SITE_NAME = "Perfect Dark";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/logo512.png`;

export const toAbsoluteUrl = (pathOrUrl: string): string => {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }

  return `${SITE_URL}${pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`}`;
};
