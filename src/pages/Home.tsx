import { Container } from "../components/Container";
import logo from "../img/logo.jpg";

export const Home: React.FC<{}> = () => {
  return (
    <Container showToolbar={true}>
      <div className="flex flex-col justify-center max-w-lg m-auto pt-8">
        <div className="">
          <img
            src={logo}
            alt="Logo"
            className="hover:shadow-inner hover:blur-sm transition duration-300"
          />
        </div>
      </div>
    </Container>
  );
};
