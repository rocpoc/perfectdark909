export interface ArtistSocialLink {
  platform: string;
  url: string;
}

export interface ArtistData {
  id: string;
  name: string;
  alias?: string;
  agents: string[];
  basedIn: string;
  setType: string;
  bio: string;
  image?: string;
  imageSrcSet?: string;
  imageSizes?: string;
  imageClassName?: string;
  epk?: string;
  socialLinks: ArtistSocialLink[];
}
