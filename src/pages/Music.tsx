import { Container } from "../components/Container";
import Discography from "../components/Discography";
import "../App.css";

export const Music: React.FC<{}> = () => {
  return (
    <Container showToolbar={true}>
      <div className="flex text-white p-4 sticky top-0 bg-black ">
        <div className="px-11 grow flex justify-center gap-2">
          <span className="text-4xl font-bold hover:bg-violet-600">MUSIC</span>
        </div>
      </div>
      <br></br>
      {/* discography */}
      <div className="app">
        <div className="discography-container p-4">
          <Discography />
        </div>
      </div>
    </Container>
  );
};
