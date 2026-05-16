import React from "react";
import { Link, useParams } from "react-router-dom";
import { Container } from "../components/Container";
import { FooterSubscribe } from "../components/FooterSubscribe";
import { SEO } from "../components/SEO";
import { getArtistById } from "../data/artists";
import { SITE_NAME, SITE_URL, toAbsoluteUrl } from "../config/site";
import NotFound from "./NotFound";

const makeDescription = (artistName: string, basedIn: string, bio: string) => {
  const description = `${artistName} is a Perfect Dark artist based in ${basedIn}. ${bio}`;

  if (description.length <= 155) {
    return description;
  }

  return `${description.slice(0, 152).trim()}...`;
};

export const ArtistDetail: React.FC = () => {
  const { artistId } = useParams<{ artistId: string }>();
  const artist = artistId ? getArtistById(artistId) : undefined;

  if (!artist) {
    return <NotFound />;
  }

  const artistUrl = `${SITE_URL}/artists/${artist.id}`;
  const pageDescription = makeDescription(
    artist.name,
    artist.basedIn,
    artist.bio
  );
  const availableSocialLinks = artist.socialLinks.filter(
    (link) => link.url && link.url !== "#"
  );
  const sameAs = availableSocialLinks.map((link) => link.url);

  const artistStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: artist.name,
    description: artist.bio,
    url: artistUrl,
    jobTitle: artist.setType,
    homeLocation: {
      "@type": "Place",
      name: artist.basedIn,
    },
    memberOf: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    ...(artist.image ? { image: toAbsoluteUrl(artist.image) } : {}),
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Artists",
        item: `${SITE_URL}/artists`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: artist.name,
        item: artistUrl,
      },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <SEO
        title={`${artist.name} | Perfect Dark Artist`}
        description={pageDescription}
        keywords={`${artist.name}, Perfect Dark artist, ${artist.basedIn}, ${artist.setType}, california techno`}
        canonical={`/artists/${artist.id}`}
        ogImage={artist.image ? toAbsoluteUrl(artist.image) : undefined}
        structuredData={[artistStructuredData, breadcrumbStructuredData]}
      />
      <div className="animated-bg" />
      <Container
        showToolbar={true}
        showMarquee={false}
        fullHeight={false}
        padBottom={false}
        className="!bg-transparent relative z-10"
        contentClassName="max-w-6xl w-full text-left text-white px-6 sm:px-10 pt-16 md:pt-20"
      >
        <article className="mx-auto grid max-w-5xl grid-cols-1 gap-8 pb-16 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-12">
          <div className="space-y-8">
            <Link
              to="/artists"
              className="inline-flex text-xs font-bold uppercase tracking-[0.25em] text-white/70 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              Back to artists
            </Link>

            <header className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/60">
                Perfect Dark Artist
              </p>
              <h1 className="font-helvetica text-4xl font-bold uppercase leading-none text-white sm:text-5xl lg:text-6xl">
                {artist.name}
              </h1>
            </header>

            <dl className="grid grid-cols-1 gap-5 border-y border-white/15 py-6 sm:grid-cols-3">
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                  Based In
                </dt>
                <dd className="mt-2 text-base text-white">{artist.basedIn}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                  Set Type
                </dt>
                <dd className="mt-2 text-base text-white">{artist.setType}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                  Bookings
                </dt>
                <dd className="mt-2 space-y-1 text-base text-white">
                  {artist.agents.map((agent) => (
                    <a
                      key={agent}
                      href={`mailto:${agent}`}
                      className="block transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                    >
                      {agent}
                    </a>
                  ))}
                </dd>
              </div>
            </dl>

            <section aria-labelledby="artist-bio-heading" className="space-y-4">
              <h2
                id="artist-bio-heading"
                className="text-xs font-bold uppercase tracking-[0.25em] text-white/60"
              >
                Bio
              </h2>
              <p className="text-lg leading-relaxed text-white/90">
                {artist.bio}
              </p>
            </section>

            <div className="flex flex-wrap gap-3 pt-2">
              {artist.epk && (
                <a
                  href={artist.epk}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-black transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  View EPK
                </a>
              )}
              {availableSocialLinks.map((link) => (
                <a
                  key={`${link.platform}-${link.url}`}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-white/20 px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  {link.platform}
                </a>
              ))}
            </div>
          </div>

          <aside className="lg:pt-20">
            <div className="aspect-square w-full border border-white/15 bg-white/10">
              {artist.image ? (
                <img
                  src={artist.image}
                  srcSet={artist.imageSrcSet}
                  sizes={artist.imageSizes}
                  alt={`${artist.name} artist portrait`}
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-sm uppercase tracking-[0.2em] text-white/30">
                  Artist image
                </div>
              )}
            </div>
          </aside>
        </article>
      </Container>

      <footer className="relative z-10 mt-auto border-t border-white/20 bg-black text-white">
        <FooterSubscribe />
      </footer>
    </div>
  );
};
