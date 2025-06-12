// src/pages/SecretVenue.tsx
// Passcode‑gated page: guests enter a one‑word code to reveal a PNG flyer
// (instead of inline text). No query string needed.

import { useState } from "react";
import VenueImage from "../img/Perfect-Damage-Instructions.png"; // ⬅️ adjust filename if needed

/**
 * Adjust these constants before deploying.
 */
const ACCESS_CODE = "fuckcops909"; // DM/email this one-word code to ticket holders

const SecretVenue: React.FC = () => {
  const [input, setInput] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim().toLowerCase() === ACCESS_CODE.toLowerCase()) {
      setVerified(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white p-6 font-sans space-y-10">
      {verified ? (
        <section className="animate-fade-in max-w-[90vw] md:max-w-xl">
          <img
            src={VenueImage}
            alt="Event details flyer"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </section>
      ) : (
        <section className="space-y-6 text-center max-w-sm w-full bg-black/30 p-8 rounded-lg backdrop-blur-sm">
          <h1 className="text-2xl font-semibold">Enter Access Code</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setError(false);
              }}
              className="w-full px-4 py-3 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-300"
              placeholder="Code"
            />
            <button
              type="submit"
              className="w-full px-4 py-3 rounded bg-emerald-500 font-semibold hover:bg-emerald-400 focus:outline-none"
            >
              Unlock
            </button>
            {error && (
              <p className="text-red-500 text-xs pt-1">
                Incorrect code — try again.
              </p>
            )}
          </form>
          <p className="text-xs opacity-80">
            You’ll find the one‑word code in your DM or confirmation email.
          </p>
        </section>
      )}
    </main>
  );
};

export default SecretVenue;
