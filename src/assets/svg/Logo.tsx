import { JSX } from 'react';

const Logo = ({ className }: { className?: string }): JSX.Element => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="N logo"
  >
    <rect x="0" y="0" width="48" height="48" rx="10" fill="#0F172A" />
    <text
      x="50%"
      y="50%"
      text-anchor="middle"
      dominant-baseline="central"
      fill="#FFFFFF"
      font-family="Inter, system-ui, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
      font-weight="700"
      font-size="26"
    >
      N
    </text>
  </svg>
);

export default Logo;
