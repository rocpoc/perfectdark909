import { Container } from "../components/Container";

export const Music: React.FC<{}> = () => {
  return (
    <Container showToolbar={true}>
      <div className="text-2xl">Music</div>
      <div className="text-xl">This is the music page.</div>
    </Container>
  );
};
