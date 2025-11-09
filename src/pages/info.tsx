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
            {/* About Us Card */}
            <div className="bg-black p-4 md:p-6 font-helvetica">
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase text-white font-helvetica mb-6">
                About Us
              </h1>
              <div className="space-y-6 text-base sm:text-lg leading-relaxed text-white/90 font-normal">
                <p>
                  we are a record label and creative collective. we release a
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

            {/* Order Information Card */}
            <div className="bg-black p-4 md:p-6 font-helvetica">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase text-white font-helvetica mb-6">
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
          </div>
        </div>
      </Container>

      <footer className="mt-auto bg-black border-t border-white/20 text-white">
        <FooterSubscribe />
      </footer>
    </div>
  );
};
