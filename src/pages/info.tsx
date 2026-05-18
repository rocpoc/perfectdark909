import { Container } from "../components/Container";
import { FooterSubscribe } from "../components/FooterSubscribe";
import { SEO } from "../components/SEO";
import { SITE_NAME, SITE_URL } from "../config/site";
import { artistData } from "../data/artists";
import { Link } from "react-router-dom";

export const Info: React.FC = () => {
  const aboutPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Perfect Dark",
    description:
      "Perfect Dark is a Northern California electronic music label, clothing brand, and artist collective focused on underground techno, events, and environmental initiatives.",
    url: `${SITE_URL}/info`,
    mainEntity: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      foundingLocation: {
        "@type": "Place",
        name: "Chico, California",
      },
      areaServed: [
        {
          "@type": "Place",
          name: "San Francisco, California",
        },
        {
          "@type": "Place",
          name: "Los Angeles, California",
        },
        {
          "@type": "Place",
          name: "Austin, Texas",
        },
      ],
      knowsAbout: [
        "Electronic music",
        "Techno",
        "Underground events",
        "Artist booking",
        "Environmental music initiatives",
        "Techno apparel",
      ],
    },
  };

  return (
    <div className="pd-page flex min-h-screen flex-col">
      <SEO
        title="Info | Perfect Dark | Electronic Music Label California"
        description="Learn about Perfect Dark, a California-based electronic music label, clothing brand, event collective, and climate-minded creative project."
        keywords="Perfect Dark, electronic music label california, techno merch, demo submissions"
        canonical="/info"
        structuredData={aboutPageStructuredData}
      />

      <Container
        showToolbar
        showMarquee={false}
        fullHeight={false}
        padBottom={false}
        contentClassName="pd-wrapper"
      >
        <main>
          <section className="pd-section-tight">
            <h1 className="pd-heading-xl">Info</h1>
          </section>

          <section className="pd-info-intro pd-section-tight">
            <div>
              <img
                src="/images/optimized/film-4.jpg"
                alt="Perfect Dark mountain landscape"
                className="pd-info-intro-image"
              />
            </div>

            <div className="pd-rte">
              <h2 className="pd-heading-md mb-6">
                Perfect Dark is a U.S.-based electronic music record label known
                for throwing high energy parties around the north state,
                releasing a variety of music not bound by genre but unified by
                feeling, and contributing towards climate activism initiatives.
              </h2>
              <p>
                Originally founded in Chico, California in 2018, the label now
                is primarily active in San Francisco and Los Angeles and spans
                influence across the United States, with notable connections in
                Austin, TX. The label's vast discography of releases primarily
                focuses on techno and other related functional dance music
                genres, combining inspired imagery and sound selections that
                create an identifiable sonic imprint.
              </p>
              <p>
                Since the label's inception, the sound has continued to evolve
                as the label pushes to be a leading voice in the modern
                underground and US techno scene. Notable artists associated with
                the label include Freeman 713, Fauna, Brick, Provider, Dogtooth,
                Carmine, Disfu, and Lavender Persuasion.
              </p>
              <p>
                Ongoing environmental initiatives include Tracks for Trees,
                where label sales taken from Bandcamp Fridays are donated to
                reforestation efforts in a collective effort to create a more
                regeneratively minded future.
              </p>
              <p>This mission is actionized in three main forms:</p>
              <ul>
                <li>
                  #1 Music - We provide a curated and authentic home for
                  alternative electronic music in the United States.
                </li>
                <li>
                  #2 Events - We grow and keep our community inspired by
                  throwing shows, events, and workshops through an art-first
                  lens.
                </li>
                <li>
                  #3 Nature - We connect our audience with our love of nature
                  through the art we output and the organizations we work with.
                </li>
              </ul>
            </div>
          </section>

          <section className="pd-grid-12 pd-section pd-border-top">
            <div className="lg:col-span-4">
              <h2 className="pd-heading-md">What We Do</h2>
            </div>
            <div className="pd-rte lg:col-span-8">
              <p>
                Music: Perfect Dark releases alternative electronic music with
                an emphasis on techno, functional dance music, and artists with
                a clear sonic point of view.
              </p>
              <p>
                Events: the label builds community through shows, parties, and
                workshops shaped by art-first direction, inclusive dance floors,
                and west coast underground energy.
              </p>
              <p>
                Nature: environmental work is part of the label's identity,
                from Tracks for Trees to benefit events and choices around merch
                production, packaging, and partners.
              </p>
            </div>
          </section>

          <section className="pd-info-roster pd-section pd-border-top">
            <div>
              <h2 className="pd-heading-md">Artist Roster</h2>
            </div>
            <div className="pd-info-roster-list">
              {artistData.map((artist) => (
                <Link
                  key={artist.id}
                  to={`/artists/${artist.id}`}
                  state={{ from: "/info", fromLabel: "Info" }}
                  className="pd-info-roster-card"
                >
                  <span
                    className={`pd-media-tile aspect-square ${
                      artist.imageClassName ?? ""
                    }`}
                  >
                    {artist.image ? (
                      <img
                        src={artist.image}
                        srcSet={artist.imageSrcSet}
                        sizes={artist.imageSizes}
                        alt={artist.name}
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <span className="flex h-full items-center justify-center bg-white/10">
                        {artist.name}
                      </span>
                    )}
                  </span>
                  <span className="block min-w-0">
                    <span className="pd-kicker mb-1 sm:mt-3">Artist</span>
                    <span className="block text-2xl font-bold uppercase leading-none sm:min-h-[3.25rem] md:min-h-[4rem] md:text-3xl">
                      {artist.name}
                    </span>
                    <span className="mt-2 block text-sm text-white/70 sm:text-base">
                      {artist.basedIn}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <section className="pd-grid-12 pd-section pd-border-top">
            <div className="lg:col-span-4">
              <h2 className="pd-heading-md">Sustainability</h2>
            </div>
            <div className="pd-rte lg:col-span-8">
              <p>
                We source our clothing from Los Angeles Apparel, a manufacturer
                with a transparent and locally rooted sustainability model. This
                allows us to reduce transport emissions, ensure fair-wage labor,
                and maintain environmental standards throughout the supply
                chain.
              </p>
              <p>
                By choosing garments crafted with recycled fibers,
                water-conscious dyeing, and long lasting construction, our merch
                becomes part of a slower, more intentional cycle. This curation
                lets our community wear pieces that reflect a shared commitment
                to ethical manufacturing and a more sustainable future.
              </p>
            </div>
          </section>

          <section className="pd-grid-12 pd-section pd-border-top">
            <div className="lg:col-span-4">
              <h2 className="pd-heading-md">Order Information</h2>
            </div>
            <div className="pd-rte lg:col-span-8">
              <ul>
                <li>
                  Reach out to{" "}
                  <a href="mailto:info@perfectdark909.com">
                    info@perfectdark909.com
                  </a>{" "}
                  with all order inquiries.
                </li>
                <li>Orders may take up to two weeks to ship.</li>
                <li>Domestic shipping within the USA only.</li>
                <li>No refunds or exchanges.</li>
                <li>Reach out within 30 days with any issues or questions.</li>
              </ul>
            </div>
          </section>
        </main>
      </Container>

      <footer className="pd-footer mt-auto">
        <FooterSubscribe />
      </footer>
    </div>
  );
};
