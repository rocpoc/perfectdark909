import { Container } from "../components/Container";
import Discography from "../components/Discography";
import "../App.css";

export const Music: React.FC<{}> = () => {
  return (
    <Container showToolbar={true}>
      <div className="px-11 grow flex justify-center gap-1">
        <span className="text-4xl font-bold can-hover:hover:bg-violet-600">
          MUSIC
        </span>
      </div>
      <br></br>
      <Discography />
    </Container>
  );
};
