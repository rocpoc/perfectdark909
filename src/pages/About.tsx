import { Container } from "../components/Container";

export const About: React.FC<{}> = () => {
  return (
    <Container showToolbar={true}>
      <div className="text-2xl">About</div>
      <div className="text-xl">This is the about page.</div>
    </Container>
  );
};
