import { Container } from "../components/Container";
import logo from "../img/logo.jpg";

export const About: React.FC<{}> = () => {
  return (
    <Container showToolbar={true}>
      <div className="flex flex-col justify-center max-w-lg m-auto pt-8">
        {/* <div className="text-4xl font-bold">ABOUT US</div> */}
        <div className="px-11 grow flex justify-center gap-2">
          <span className="text-4xl font-bold can-hover:hover:bg-violet-600">
            ABOUT US
          </span>
        </div>
        <br></br>
        <div className="text-xl p-8">
          Perfect Dark is a California based record label known for throwing
          high energy underground parties and releasing a variety of electronic
          music. Not bound by genre but unified by feeling.
          <br></br>
          <br></br>
          We are a collective of friends. We're interested in cultivating a
          community that shares our love for eclectic dance music, ecological
          awareness, and aesthetic cohesion. We want to bring people together
          through inclusive events that celebrate life, friendship, mother
          earth, and music with soul.
          <img src={logo} alt="Logo" />
        </div>
      </div>
    </Container>
  );
};
