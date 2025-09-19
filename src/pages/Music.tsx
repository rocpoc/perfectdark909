import { useEffect } from "react";

export const Music: React.FC = () => {
  useEffect(() => {
    window.location.replace("https://perfectdark909.bandcamp.com");
  }, []);

  return (
    <div className="text-white p-6">Redirecting to Bandcamp… If you’re not redirected, <a className="underline" href="https://perfectdark909.bandcamp.com">click here</a>.</div>
  );
};
