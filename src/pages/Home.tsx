import { Container } from "../components/Container";

export const Home: React.FC<{}> = () => {
  return (
    <Container showToolbar={true}>
      <div className="text-2xl">Home</div>
      <div className="text-xl">Coming soon!</div>
    </Container>
  );
};
