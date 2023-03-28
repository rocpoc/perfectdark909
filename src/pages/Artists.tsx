import { Container } from "../components/Container";

export const Artists: React.FC<{}> = () => {
  return (
    <Container showToolbar={true}>
      <div className="flex flex-col justify-center max-w-lg m-auto pt-8">
        {/* <div className="text-4xl font-bold">ABOUT US</div> */}
        <div className="px-11 grow flex justify-center gap-2">
          <span className="text-4xl font-bold can-hover:hover:bg-violet-600">
            OUR ARTISTS
          </span>
        </div>
        <br></br>
        <div className="px-11 grow flex justify-center gap-2">
          <span className="text-2xl font-bold can-hover:hover:bg-violet-600 can-hover:hover:line-through">
            BRICK
          </span>
        </div>
        <br></br>
        <div className="px-11 grow flex justify-center gap-2">
          <span className="text-2xl font-bold can-hover:hover:bg-violet-600 can-hover:hover:line-through">
            FREEMAN 713
          </span>
        </div>
        <br></br>
        <div className="px-11 grow flex justify-center gap-2">
          <span className="text-2xl font-bold can-hover:hover:bg-violet-600 can-hover:hover:line-through">
            LUVR BOY
          </span>
        </div>
        <br></br>
        <div className="px-11 grow flex justify-center gap-2">
          <span className="text-2xl font-bold can-hover:hover:bg-violet-600 can-hover:hover:line-through">
            FAUNA
          </span>
        </div>
        <br></br>
        <div className="px-11 grow flex justify-center gap-2">
          <span className="text-2xl font-bold can-hover:hover:bg-violet-600 can-hover:hover:line-through">
            MIKIE ORANGE
          </span>
        </div>
        <br></br>
        <div className="px-11 grow flex justify-center gap-2">
          <span className="text-2xl font-bold can-hover:hover:bg-violet-600 can-hover:hover:line-through">
            DISFU
          </span>
        </div>
        <br></br>
        <div className="px-11 grow flex justify-center gap-2">
          <span className="text-2xl font-bold can-hover:hover:bg-violet-600 can-hover:hover:line-through">
            LAVENDER PERSUASION
          </span>
        </div>
      </div>
    </Container>
  );
};
