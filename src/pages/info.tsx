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
        <div className="grid items-start gap-12 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-20">
          <div className="flex justify-center lg:justify-start">
            <div className="max-w-xl w-full space-y-6 font-helvetica text-center lg:text-left text-white">
              <h1 className="text-2xl sm:text-3xl md:text-4xl uppercase text-white font-semibold">
                About Us
              </h1>
              <div className="space-y-6 text-base sm:text-lg leading-relaxed text-white/90 font-normal">
                <p>
                  we are a record label and creative collective. We release a
                  variety of electronic music and host unique underground
                  events, not bound by genre, but unified by feeling.
                </p>
                <p>
                  we aim to cultivate a multi-disciplinary community around our
                  love for dance music, ecological awareness, and aesthetic
                  cohesion.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-start">
            <div className="max-w-xl w-full space-y-6 text-base sm:text-lg leading-relaxed text-white/90 font-helvetica text-center lg:text-left">
              <section className="space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl uppercase text-white font-semibold">
                  Order Information
                </h2>
                <div className="space-y-6 font-normal">
                  <p>
                    reach out to {""}
                    <a
                      href="mailto:info@perfectdark909.com"
                      className="underline underline-offset-4 decoration-2 transition-colors duration-200 hover:text-emerald-300"
                    >
                      info@perfectdark909.com
                    </a>{" "}
                    with all order inquiries
                  </p>
                  <p>orders may take up to two weeks to ship</p>
                  <p>only ships to the United States</p>
                  <p>no refunds or exchanges</p>
                  <p>
                    reach out within 30 days if you have any issues or questions
                  </p>
                </div>
              </section>
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
