import { Container } from "../components/Container";

export const Contact: React.FC<{}> = () => {
  return (
    <Container showToolbar={true}>
      {/* <div className="text-4xl font-bold">CONTACT</div> */}
      <div className="px-11 grow flex justify-center gap-2">
        <span className="text-4xl font-bold can-hover:hover:bg-violet-600">
          CONTACT
        </span>
      </div>
      <br></br>
      <br></br>

      <div className="text-2xl font-bold">
        For booking inquries and demo submissions, please email us at: <br></br>
        <br></br>
        <a
          className="className=text-4xl font-bold can-hover:hover:bg-violet-600 italic"
          href="mailto:info@perfectdark909.com"
        >
          {" "}
          info@perfectdark909.com
        </a>
      </div>
      <br></br>
      <br></br>
      <div className="text-xl font-bold">
        Please leave your name, contact info, and a brief description of your
        request.
        <br></br>
        Thank you!
      </div>
    </Container>
  );
};
