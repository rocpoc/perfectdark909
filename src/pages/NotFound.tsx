// src/pages/NotFound.tsx
// Simple 404 page for unmatched routes. Provides a link back home.

import { Link } from "react-router-dom";

const NotFound: React.FC = () => (
  <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6 space-y-6 font-sans">
    <h1 className="text-4xl font-bold">404</h1>
    <p className="text-lg opacity-80">Page not found</p>
    <Link
      to="/"
      className="px-4 py-2 rounded bg-accent-dark font-semibold hover:bg-accent"
    >
      Take me home
    </Link>
  </main>
);

export default NotFound;
