import * as React from "react";

const Fb: React.FC<FbProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-brand-facebook"
      width="45"
      height="45"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#1f42a3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
    </svg>
  );
};

interface FbProps {}

export default Fb;
