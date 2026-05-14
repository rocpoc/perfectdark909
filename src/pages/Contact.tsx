import { Container } from "../components/Container";
import { FooterSubscribe } from "../components/FooterSubscribe";
import { SEO } from "../components/SEO";

export const Contact: React.FC = () => {
  return (
    <div className="pd-page flex min-h-screen flex-col">
      <SEO
        title="Contact | Perfect Dark | Booking & Demo Submissions"
        description="Contact Perfect Dark for booking inquiries, demos, collaborations, and order support."
        keywords="Perfect Dark contact, Perfect Dark booking, demo submissions, techno label contact"
        canonical="/contact"
      />

      <Container
        showToolbar
        showMarquee={false}
        fullHeight={false}
        padBottom={false}
        contentClassName="pd-wrapper"
      >
        <main className="pd-section-tight">
          <h1 className="pd-heading-xl mb-12">Contact</h1>

          <div className="pd-body grid max-w-3xl gap-4 text-white/70">
            <p>
              For bookings/event inquiries:{" "}
              <a
                href="mailto:mila@perfectdark909.com"
                className="underline underline-offset-2 hover:text-[#8ceb8f]"
              >
                mila@perfectdark909.com
              </a>
            </p>
            <p>
              Shop/general inquiries:{" "}
              <a
                href="mailto:info@perfectdark909.com"
                className="underline underline-offset-2 hover:text-[#8ceb8f]"
              >
                info@perfectdark909.com
              </a>
            </p>
            <p>
              Demo submissions:{" "}
              <a
                href="mailto:info@perfectdark909.com"
                className="underline underline-offset-2 hover:text-[#8ceb8f]"
              >
                info@perfectdark909.com
              </a>{" "}
              <span className="text-white/50">
                Note: we only listen to private SoundCloud links.
              </span>
            </p>
          </div>
        </main>
      </Container>

      <footer className="pd-footer mt-auto">
        <FooterSubscribe />
      </footer>
    </div>
  );
};
