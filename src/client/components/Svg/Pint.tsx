import * as React from "react";

const Pint: React.FC<PintProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-brand-pinterest"
      width="45"
      height="45"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#be0606"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <line x1="8" y1="20" x2="12" y2="11" />
      <path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
};
interface PintProps {}

export default Pint;
