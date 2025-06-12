// src/pages/SecretVenue.tsx
// Passcode‑gated page: guests enter a one‑word code in an input box to reveal
// the private venue address (and optional Google Drive link). No query string
// needed.

import { useState } from "react";

/**
 * Adjust these constants before deploying.
 */
const ACCESS_CODE = "fuckcops909"; // DM/email this one‑word code to ticket holders
const VENUE_ADDRESS = "Roy G. Guerro Park";
const SHOW_DATE = "Friday, June 13, 2025. 10PM-Late";
const GOOGLE_DRIVE_URL = ""; // optional: link to map/PDF; leave "" to hide

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
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6 font-sans space-y-8">
      {verified ? (
        <section className="space-y-4 text-center animate-fade-in">
          <h1 className="text-3xl font-bold tracking-wide">
            Perfect Damage ✧ Address Drop
          </h1>
          <p className="text-lg font-semibold text-emerald-300">{SHOW_DATE}</p>
          <p className="text-xl font-mono break-words">{VENUE_ADDRESS}</p>
          {GOOGLE_DRIVE_URL && (
            <a
              href={GOOGLE_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:no-underline text-emerald-300"
            >
              View Map / Directions
            </a>
          )}
          <p className="text-xs opacity-70 pt-2">
            Don’t share this page or code publicly — see you on the dance floor
            ✨
          </p>
        </section>
      ) : (
        <section className="space-y-4 text-center max-w-sm">
          <h1 className="text-2xl font-semibold">Enter Access Code</h1>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="password"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setError(false);
              }}
              className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-300"
              placeholder="Code"
            />
            <button
              type="submit"
              className="w-full px-4 py-2 rounded bg-emerald-500 font-semibold hover:bg-emerald-400 focus:outline-none"
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
