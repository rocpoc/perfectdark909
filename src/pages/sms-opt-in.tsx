// src/pages/SmsOptIn.tsx
// Static proof-of-consent page for Twilio Toll-Free verification.
// This page is publicly reachable at /sms-opt-in and displays the
// exact opt-in language your fans see when they text in.

import React from "react";

/**
 * IMPORTANT: Replace TWILIO_NUMBER with your actual toll-free number.
 */
const TWILIO_NUMBER = "(844) 909-3010";

const SmsOptIn: React.FC = () => (
  <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6 space-y-6 font-sans">
    <header className="space-y-2 text-center">
      <h1 className="text-2xl font-semibold">Perfect Dark — SMS Opt-In</h1>
      <p className="max-w-md mx-auto text-sm opacity-80 leading-relaxed">
        Text <span className="font-bold text-emerald-300">DARK</span> to
        <br />
        <span className="font-mono text-base">{TWILIO_NUMBER}</span>
        <br />
        to receive the private venue address for our upcoming techno events.
      </p>
    </header>

    <section className="max-w-md text-xs leading-relaxed space-y-2 opacity-90">
      <p>
        By texting, you consent to receive one automated reply with the event
        address and a single reminder on the day of the show.
      </p>
      <ul className="list-disc list-inside space-y-1">
        <li>No ongoing promotional or marketing messages will be sent.</li>
        <li>
          Reply <span className="font-mono">STOP</span> to opt out or
          <span className="font-mono"> HELP</span> for help.
        </li>
        <li>Message &amp; data rates may apply.</li>
      </ul>
    </section>

    <footer className="text-xs opacity-60 pt-4 text-center">
      © {new Date().getFullYear()} Perfect Dark. All rights reserved.
    </footer>
  </main>
);

export default SmsOptIn;
