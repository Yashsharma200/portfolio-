
import { useState } from "react";

export default function AwardCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="award-card">
        <div className="award-icon">🏆</div>

        <p className="award-year">AWARD · 2026</p>

        <h2 onClick={() => setIsOpen(true)} style={{ cursor: 'pointer' }}>Global One Person Army Award</h2>

        <p className="award-description">
          Recognized for exceptional ownership, domain mastery,
          and independent end-to-end delivery of enterprise
          GenAI applications.
        </p>

        <button
          type="button"
          className="award-arrow"
          onClick={() => setIsOpen(true)}
          aria-label="View award certificate"
          title="View award certificate"
        >
          ›
        </button>
      </div>

      {isOpen && (
        <div
          className="award-overlay"
          onClick={() => setIsOpen(false)}
          role="presentation"
        >
          <div
            className="award-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Global One Person Army Award certificate"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="award-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close certificate"
            >
              ×
            </button>

            <img
              src="/images/one-person-army-award.png"
              alt="Global One Person Army Award 2026"
            />
          </div>
        </div>
      )}
    </>
  );
}
