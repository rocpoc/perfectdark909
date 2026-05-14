import React from "react";

export const FooterSubscribe: React.FC = () => (
  <div className="pd-footer-inner">
    <div className="pd-footer-signup">
      <form
        className="pd-footer-form"
        action="/subscribe/index.html"
        method="get"
        aria-label="Subscribe to Perfect Dark email updates"
      >
        <label htmlFor="footer-email" className="sr-only">
          Email Address
        </label>
        <input
          id="footer-email"
          name="email"
          type="email"
          placeholder="email@example.com"
          className="pd-footer-input"
        />
        <button type="submit" className="pd-footer-button">
          Subscribe
        </button>
      </form>
    </div>

    <p className="pd-footer-message">
      Tree of Knowledge Email Club. Exclusive downloads, merch deals, and event
      updates.
    </p>

    <nav className="pd-footer-links" aria-label="Footer navigation">
      <a href="/info">Info</a>
      <a href="/contact">Contact</a>
      <a
        href="https://www.instagram.com/perfectdark909/?hl=en"
        target="_blank"
        rel="noreferrer"
      >
        Instagram
      </a>
      <a
        href="https://perfectdark909.bandcamp.com/"
        target="_blank"
        rel="noreferrer"
      >
        Bandcamp
      </a>
    </nav>
  </div>
);
