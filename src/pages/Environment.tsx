import { Container } from "../components/Container";
import { FooterSubscribe } from "../components/FooterSubscribe";
import { SEO } from "../components/SEO";
import pd_90_logo from "../img/PD - 90_s type-01.png";
import pd_spiral_logo from "../img/PD - Spiral-01.png";
import pd_heart_logo from "../img/PD_Special Heart-01.png";
import earth_first from "../img/earth-first.png";
import tracks_for_trees from "../img/tracks-4-trees.jpeg";

export const Environment: React.FC = () => {
  return (
    <div className="pd-page flex min-h-screen flex-col">
      <SEO
        title="Environment | Perfect Dark | Climate Activism"
        description="Learn about Perfect Dark's environmental initiatives including Tracks for Trees and Earth First events."
        keywords="Perfect Dark environment, climate activism, tracks for trees, environmental music label"
        canonical="/environment"
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
            <h1 className="pd-heading-xl">Earth</h1>
          </section>

          <section className="pd-grid-12 pd-section-tight">
            <div className="lg:col-span-7">
              <img
                src={tracks_for_trees}
                alt="Tracks for Trees initiative"
                className="w-full object-cover"
              />
            </div>
            <div className="pd-rte lg:col-span-5">
              <span className="pd-kicker">Tracks for Trees</span>
              <p className="pd-body-large">
                In January of 2023, Perfect Dark saw an opportunity for
                Bandcamp Fridays to make a positive, measurable impact on our
                shared environment.
              </p>
              <p>
                On the first Friday of the month, Perfect Dark track purchases
                aid in reforestation efforts through our Tracks for Trees
                initiative. By partnering with{" "}
                <a href="https://onetreeplanted.org">One Tree Planted</a>, one
                track purchase equals one tree planted.
              </p>
            </div>
          </section>

          <section className="pd-grid-12 pd-section pd-border-top">
            <div className="pd-rte lg:col-span-5">
              <span className="pd-kicker">Community Action</span>
              <p className="pd-body-large">
                Our commitment to a regenerative future extends into the local
                communities our members are part of.
              </p>
              <p>
                Perfect Dark has partnered with Chico's{" "}
                <a href="https://www.stopvalleysedge.org/">
                  Stop Valley's Edge
                </a>{" "}
                initiative to host a benefit show intended to raise money and
                bring awareness to continued residential development into the
                Sierra Nevada foothills.
              </p>
            </div>
            <div className="lg:col-span-7">
              <img
                src={earth_first}
                alt="Earth First Event"
                className="w-full object-cover"
              />
            </div>
          </section>

          <section className="pd-section pd-border-top">
            <p className="pd-heading-md max-w-5xl">
              How you do anything is how you do everything. We want to help
              create a scene where actions, tickets, and tracks purchased
              contribute to a more regenerative future.
            </p>
            <p className="pd-body-large mt-8 text-white/70">
              "Individually, we are one drop. Together, we are an ocean." -
              Ryunosuke Satoro
            </p>
            <p className="mt-6 text-[#8ceb8f]">#RaveForAReason</p>
            <div className="mt-12 flex gap-4">
              <img src={pd_heart_logo} alt="Perfect Dark heart logo" width="52" />
              <img src={pd_90_logo} alt="Perfect Dark type logo" width="52" />
              <img src={pd_spiral_logo} alt="Perfect Dark spiral logo" width="52" />
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
