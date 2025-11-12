import { Container } from "../components/Container";
import { FooterSubscribe } from "../components/FooterSubscribe";

export const Info: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white relative">
      <div className="animated-bg" />
      <Container
        showToolbar
        showMarquee={false}
        fullHeight={false}
        padBottom={false}
        className="!bg-transparent relative z-10"
        contentClassName="max-w-6xl w-full text-left text-white px-6 sm:px-10 pt-16 md:pt-20"
      >
        <div className="flex justify-center pt-4 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full max-w-5xl">
            {/* Left Column */}
            <div className="space-y-8 lg:space-y-12">
              {/* About Us Card */}
              <div className="p-4 md:p-6 font-helvetica">
                <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold uppercase text-white font-helvetica mb-6">
                  About Us
                </h1>
                <div className="space-y-6 text-base sm:text-lg leading-relaxed text-white/90 font-normal">
                  {/* <p>
                    we are a record label and creative collective.
                    <p>
                      <br />
                    </p>
                    we release a variety of electronic music and host unique
                    underground events, not bound by genre, but unified by
                    feeling.
                  </p>
                  <p>
                    we aim to cultivate a multi-disciplinary community around
                    our love for dance music, ecological awareness, and
                    aesthetic cohesion.
                  </p> */}
                  <p>
                    perfect dark is an electronic music record label based in
                    northern california known for throwing high energy parties
                    around the north state, releasing a variety of music not
                    bound by genre but unified by feeling, and contributing
                    towards climate activism initiatives. originally founded in
                    chico, california in 2018, the label now is primarily active
                    in san francisco and los angeles and spans influence across
                    the united states, with notable connections in austin, tx.
                    the label’s vast discography of releases primarily focuses
                    on techno and other related functional dance music genres,
                    that regularly combine inspired imagery and sound selections
                    that create an identifiable and unique sonic imprint. since
                    the label’s inception, the sound has continued to evolve as
                    the label pushes to be a leading voice in the modern
                    underground and us techno scene. notable artists associated
                    with the label include freeman 713, fauna, brick, provider,
                    dogtooth, carmine, disfu, and lavender persuasion.
                  </p>
                  <p>
                    ongoing environmental initiatives include tracks for trees,
                    where label sales taken from bandcamp fridays are donated to
                    reforestation efforts in a collective effort to create a
                    more regeneratively minded future. a core mission of the
                    label is to create inclusive spaces where people can gather,
                    celebrate life and music, connect with their communities,
                    and contribute towards environmental causes. we believe that
                    through inspiring others a shared love of music, events, and
                    nature will make the world a better place.
                  </p>
                  <p>
                    this mission is actionized in three main forms: #1 music —
                    we provide a premiere, curated and authentic home for
                    alternative electronic music in the united states. #2 events
                    — we grow and keep our community inspired by throwing shows,
                    events, and workshops through a thoughtful and art‑first
                    lens. #3 nature — we connect our audience with our love of
                    nature through the art we output, the organizations we work
                    with, and our brand voice and approach to event planning.
                  </p>
                  <p>
                    our original identity takes inspiration from three main
                    places: #1 90’s techno / ecstasy era — this is central to
                    the brand and is reflected in a slogan and a drugged‑out
                    escapism vibe. #2 punk / hardcore scene — very important, as
                    this reinforces an anti‑establishment attitude. #3
                    industrial / utilitarian design — brings a modern and
                    slightly futurist / dystopian trope across our art.
                  </p>
                  <p>
                    at its time of conception, perfect dark was a direct counter
                    response to the edm &amp; bass music movements' sound and
                    aesthetic. since our inception, we have evolved in sound and
                    refined our mission. we strive to push the sound forward and
                    stay true to the aesthetic ground which we have laid. trends
                    will come and go, but good music is timeless and will last
                    forever. everything is special and everything is important.
                    how you do anything is how you do everything.
                  </p>
                  <p>
                    "individually we are one drop, but together, we create an
                    ocean." — ryunosuke satoro.
                  </p>
                  <p>
                    thank you for reading this far, and welcome aboard. perfect
                    dark 2026.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="p-4 md:p-6 font-helvetica">
              {/* Order Information Card */}
              <div>
                <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold uppercase text-white font-helvetica mb-6">
                  Order Information
                </h2>
                <div className="space-y-6 text-base sm:text-lg leading-relaxed text-white/90 font-normal">
                  <p>
                    reach out to {""}
                    <a
                      href="mailto:info@perfectdark909.com"
                      className="underline underline-offset-4 decoration-2 transition-colors duration-200 hover:text-accent"
                    >
                      info@perfectdark909.com
                    </a>{" "}
                    with all order inquiries
                  </p>
                  <p>orders may take up to two weeks to ship</p>
                  <p>domestic shipping (USA) only</p>
                  <p>no refunds or exchanges</p>
                  <p>
                    reach out within 30 days if you have any issues or questions
                  </p>
                </div>
              </div>

              {/* SUSTAINABILITY Section */}
              <div className="mt-12 pt-12 border-t border-white/20">
                <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold uppercase text-white font-helvetica mb-6">
                  SUSTAINABILITY
                </h2>
                <div className="space-y-6 text-base sm:text-lg leading-relaxed text-white/90 font-normal">
                  <p>
                    we source our clothing from Los Angeles Apparel, a
                    manufacturer with a transparent and locally rooted
                    sustainability model. This allows us to reduce transport
                    emissions, ensure fair-wage labor, and maintain
                    environmental standards throughout the supply chain.
                  </p>
                  <p>
                    by choosing garments crafted with recycled fibers,
                    water-conscious dyeing, and long lasting construction, our
                    merch becomes part of a slower, more intentional cycle. this
                    curation lets our community wear pieces that reflect a
                    shared commitment to ethical manufacturing and a more
                    sustainable future.
                  </p>
                  <p className="italic">
                    perfect dark ships our merch in compostable mailers, crafted
                    from plant-based materials with a smaller environmental
                    footprint than conventional mailers.
                  </p>
                </div>
              </div>

              {/* Demo Submissions Card */}
              <div className="mt-12 pt-12 border-t border-white/20">
                <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold uppercase text-white font-helvetica mb-6">
                  Demo Submissions
                </h2>
                <div className="text-base sm:text-lg leading-relaxed text-white/90 font-normal">
                  <p>
                    send demos to {""}
                    <a
                      href="mailto:info@perfectdark909.com"
                      className="underline underline-offset-4 decoration-2 transition-colors duration-200 hover:text-accent"
                    >
                      info@perfectdark909.com
                    </a>
                  </p>
                  <p>
                    please include your name, contact info, and a brief bio.
                    send private Souncloud links if available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <footer className="mt-auto bg-black border-t border-white/20 text-white relative z-10">
        <FooterSubscribe />
      </footer>
    </div>
  );
};
