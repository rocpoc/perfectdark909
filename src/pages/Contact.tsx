import { Container } from "../components/Container";

export const Contact: React.FC<{}> = () => {
  return (
    <Container showToolbar={true}>
      <div className="text-2xl">Contact</div>
      <div className="text-xl">This is the contact page.</div>
    </Container>
  );
};
