import { Container } from "../components/Container";

export const Contact: React.FC<{}> = () => {
  return (
    <Container showToolbar={true}>
      <div className="text-2xl">Contact</div>
      <div className="text-xl">Contact us: info@perfectdark909.com</div>
    </Container>
  );
};
