// Subscribe page is a static HTML file so MailerLite script + form load together.
// This component redirects to it (dev + in-app navigation).

import React, { useEffect } from "react";

const EmailSignup: React.FC = () => {
  useEffect(() => {
    window.location.replace("/subscribe/index.html");
  }, []);
  return null;
};

export default EmailSignup;
