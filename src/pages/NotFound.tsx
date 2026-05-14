// src/pages/NotFound.tsx
// Simple 404 page for unmatched routes. Provides a link back home.

import { Link } from "react-router-dom";

const NotFound: React.FC = () => (
  <main className="pd-page pd-wrapper flex min-h-screen flex-col justify-center py-24">
    <span className="pd-kicker">404</span>
    <h1 className="pd-heading-xl">Page not found</h1>
    <Link
      to="/"
      className="pd-button mt-8 w-fit"
    >
      Home
    </Link>
  </main>
);

export default NotFound;
