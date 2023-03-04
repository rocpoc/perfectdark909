import { Container } from "../components/Container";


export const About: React.FC<{}> = () => {
  return (
    <Container showToolbar={true}>
      <div className="flex flex-col justify-center max-w-lg m-auto pt-8">
        <div className="text-2xl">About</div>
        <br></br>
        <div className="tex text-xl">
          Perfect Dark is a CA based record label known for throwing high energy
          underground parties and releasing a variety of electronic music - not
          bound by genre but unified by feeling. We are a collective of friends.
          <br></br>
          <br></br>
          We're interested in cultivating a community that shares our love for
          eclectic dance music, ecological awareness, and aesthetic cohesion. We
          want to bring people together through inclusive events that celebrate
          life, friendship, mother earth, and music with soul.
        </div>
      </div>
    </Container>
  );
};
