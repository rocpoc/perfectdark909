import { Container } from "../components/Container";

export const Music: React.FC<{}> = () => {
  return (
    <Container showToolbar={true}>
      <div className="text-2xl">Music</div>
      <div className="text-xl">Listen to our music!</div>
      <div className="w-full h-96 mx-auto my-auto align-middle p-4 self-auto">
        <iframe
          style={{ border: 0, width: "100%", height: "100%" }}
          src="https://bandcamp.com/EmbeddedPlayer/album=2029916778/size=large/bgcol=333333/linkcol=2ebd35/artwork=small/transparent=true/"
          seamless
        >
          <a href="https://perfectdark909.bandcamp.com/album/rave-forest">
            Rave Forest by Perfect Dark
          </a>
        </iframe>
      </div>
    </Container>
  );
};
