import { Container } from "../components/Container";

export const Home: React.FC<{}> = () => {
  return (
    <Container showToolbar={true}>
      <div className="text-2xl">Home</div>
      <div className="text-xl">This is the home page.</div>
    </Container>
  );
};
