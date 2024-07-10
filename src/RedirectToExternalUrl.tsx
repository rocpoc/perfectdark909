import { useEffect } from "react";

interface RedirectToExternalUrlProps {
  url: string;
}

const RedirectToExternalUrl: React.FC<RedirectToExternalUrlProps> = ({
  url,
}) => {
  useEffect(() => {
    window.location.href = url;
  }, [url]);

  return null;
};

export default RedirectToExternalUrl;
