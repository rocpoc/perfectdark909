import { Container } from "../components/Container";
import { FooterSubscribe } from "../components/FooterSubscribe";

export const Info: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Container
        showToolbar
        showMarquee={false}
        fullHeight={false}
        padBottom={false}
        className="!bg-black"
        contentClassName="max-w-6xl w-full text-left text-white px-6 sm:px-10 pt-16 md:pt-20"
      >
        <div className="flex justify-center pt-4 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full max-w-5xl">
            {/* Left Column */}
            <div className="space-y-8 lg:space-y-12">
              {/* About Us Card */}
              <div className="bg-black p-4 md:p-6 font-helvetica">
                <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold uppercase text-white font-helvetica mb-6">
                  About Us
                </h1>
                <div className="space-y-6 text-base sm:text-lg leading-relaxed text-white/90 font-normal">
                  <p>
                    we are a record label and creative collective. we release a
                    variety of electronic music and host unique underground
                    events, not bound by genre, but unified by feeling.
                  </p>
                  <p>
                    we aim to cultivate a multi-disciplinary community around
                    our love for dance music, ecological awareness, and
                    aesthetic cohesion.
                  </p>
                </div>
              </div>

              {/* Demo Submissions Card */}
              <div className="bg-black p-4 md:p-6 font-helvetica">
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
                  <p></p>
                  please include your name, contact info, and a brief bio. send
                  Souncloud links if available.
                </div>
              </div>
            </div>

            {/* Right Column - Order Information Card */}
            <div className="bg-black p-4 md:p-6 font-helvetica">
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

              {/* EARTH Section */}
              <div className="mt-12 pt-12 border-t border-white/20">
                <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold uppercase text-white font-helvetica mb-6">
                  EARTH
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
            </div>
          </div>
        </div>
      </Container>

      <footer className="mt-auto bg-black border-t border-white/20 text-white">
        <FooterSubscribe />
      </footer>
    </div>
  );
};
