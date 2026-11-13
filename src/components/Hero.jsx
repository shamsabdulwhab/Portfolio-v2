import Logo from "./Logo.jsx";
import "./Hero.css";

// The curves are SVG paths, so they stretch with the hero instead of blurring
// the way a picture of a line would.
function DecorativeLines() {
  return (
    <>
      <svg
        className="hero-lines hero-lines-desktop"
        viewBox="0 0 1000 580"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          className="line line-white"
          d="M-10 290 C 90 270, 160 300, 250 345 C 340 390, 420 400, 500 370 C 600 330, 690 280, 800 268 C 850 262, 890 266, 930 270"
        />
        <path
          className="line line-yellow"
          d="M-10 365 C 90 345, 160 375, 250 425 C 340 475, 420 488, 500 455 C 600 410, 690 350, 800 330 C 850 322, 890 326, 930 332"
        />
      </svg>

      <svg
        className="hero-lines hero-lines-mobile"
        viewBox="0 0 800 1000"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          className="line line-white"
          d="M-20 250 C 140 210, 240 300, 360 270 C 500 235, 600 180, 820 150"
        />
        <path
          className="line line-yellow"
          d="M-20 330 C 160 280, 280 390, 420 350 C 560 310, 650 250, 820 210"
        />
      </svg>
    </>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-panel" aria-hidden="true" />

      <div className="hero-title">
        <h1>Portfolio</h1>
        <Logo className="hero-mark" />
      </div>

      <img
        className="hero-portrait"
        src="/images/hero-portrait.jpg"
        alt="Shams Alqadri, draped in light fabric with daisies"
      />

      <DecorativeLines />
    </section>
  );
}
