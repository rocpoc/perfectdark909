import { Container } from "../components/Container";
import { FooterSubscribe } from "../components/FooterSubscribe";
import { SEO } from "../components/SEO";

export const Info: React.FC = () => {
  return (
    <div className="pd-page flex min-h-screen flex-col">
      <SEO
        title="Info | Perfect Dark | Electronic Music Label California"
        description="Learn about Perfect Dark, a California-based electronic music label, clothing brand, event collective, and climate-minded creative project."
        keywords="Perfect Dark, electronic music label california, techno merch, demo submissions"
        canonical="/info"
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

          <section className="pd-grid-12 pd-section-tight">
            <div className="lg:col-span-6">
              <img
                src="/images/optimized/film-4.jpg"
                alt="Perfect Dark mountain landscape"
                className="h-full min-h-[320px] w-full object-cover"
              />
            </div>

            <div className="pd-rte lg:col-span-6">
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
