import { Container } from "../components/Container";

export const Artists: React.FC<{}> = () => {
  return (
    <Container showToolbar={true}>
      <div className="flex flex-col justify-center max-w-2xl m-auto pt-8">
        {/* <div className="text-4xl font-bold">ABOUT US</div> */}
        <div className="px-11 grow flex justify-center gap-2">
          <span className="text-4xl font-bold can-hover:hover:text-emerald-300">
            OUR ARTISTS
          </span>
        </div>
        <br></br>
        <div className="px-11 grow flex justify-center gap-2">
          <span className="text-2xl font-bold can-hover:hover:text-emerald-300 can-hover:hover:line-through">
            BRICK
          </span>
        </div>
        <br></br>
        <div className="px-11 grow flex justify-center gap-2">
          <span className="text-2xl font-bold can-hover:hover:text-emerald-300 can-hover:hover:line-through">
            FREEMAN 713
          </span>
        </div>
        <br></br>
        <div className="px-11 grow flex justify-center gap-2">
          <span className="text-2xl font-bold can-hover:hover:text-emerald-300 can-hover:hover:line-through">
            LUVR BOY
          </span>
        </div>
        <br></br>
        <div className="px-11 grow flex justify-center gap-2">
          <span className="text-2xl font-bold can-hover:hover:text-emerald-300 can-hover:hover:line-through">
            FAUNA
          </span>
        </div>
        <br></br>
        <div className="px-11 grow flex justify-center gap-2">
          <span className="text-2xl font-bold can-hover:hover:text-emerald-300 can-hover:hover:line-through">
            CARMINE
          </span>
        </div>
        <br></br>
        <div className="px-11 grow flex justify-center gap-2">
          <span className="text-2xl font-bold can-hover:hover:text-emerald-300 can-hover:hover:line-through">
            DOGTOOTH
          </span>
        </div>
        <br></br>
        <div className="px-11 grow flex justify-center gap-2">
          <span className="text-2xl font-bold can-hover:hover:text-emerald-300 can-hover:hover:line-through">
            DISFU
          </span>
        </div>
        <br></br>
        <div className="px-11 grow flex justify-center gap-2">
          <span className="text-2xl font-bold can-hover:hover:text-emerald-300 can-hover:hover:line-through">
            LAVENDER PERSUASION
          </span>
        </div>
      </div>
    </Container>
  );
};
