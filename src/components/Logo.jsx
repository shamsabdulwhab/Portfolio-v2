// The monogram from the design: a thin script S with a swash,
// joined to a straight stem. It is drawn as SVG so it stays sharp
// and uses the text color of wherever it is placed.
export default function Logo({ className = "" }) {
  const classes = className ? `logo ${className}` : "logo";

  return (
    <svg className={classes} viewBox="-4 -2 108 134" fill="none" aria-hidden="true">
      <g
        stroke="currentColor"
        strokeWidth="4.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M52 60C54 40 56 18 50 10C44 2 24 2 20 16C16 32 18 50 38 58" />
        <path d="M46 62C42 84 30 112 16 116C2 120 0 92 12 74C20 62 32 70 26 88" />
        <path d="M48 60H74" />
        <path d="M74 8V112" />
        <path d="M74 86L94 112" />
      </g>
    </svg>
  );
}
