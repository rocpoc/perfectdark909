import { Container } from "../components/Container";
import logo from "../img/logo.jpg";

export const Home: React.FC<{}> = () => {
  return (
    <Container showToolbar={true}>
      <div className="flex justify-center max-w-2xl m-auto pt-8">
        <div>
          <img
            src={logo}
            alt="Logo"
            className="can-hover:hover:shadow-inner can-hover:hover:blur-sm transition duration-500"
          />
        </div>
      </div>
    </Container>
  );
};
