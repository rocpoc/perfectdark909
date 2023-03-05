import { Container } from "../components/Container";

export const Merch: React.FC<{}> = () => {
  return (
    <Container showToolbar={true}>
      <div className="flex text-white p-4 sticky top-0 bg-black">
        <div className="px-11 grow flex justify-center gap-2">
          <span className="text-4xl font-bold can-hover:hover:bg-violet-600">
            MERCH
          </span>
        </div>
      </div>
      <br></br>
      <div className="text-2xl">
        <a
          className="className=text-4xl font-bold italic can-hover:hover:bg-gradient-to-bl from-violet-600 to-violet-800"
          href="https://perfectdark909.bandcamp.com/merch"
        >
          {" "}
          CLICK HERE TO VISIT OUR BANDCAMP STORE
        </a>
      </div>
    </Container>
  );
};
