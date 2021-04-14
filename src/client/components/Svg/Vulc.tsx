import * as React from "react";

const Vulc: React.FC<VulcProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-building-community"
      width="45"
      height="45"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="#000000"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
      <line x1="13" y1="7" x2="13" y2="7.01" />
      <line x1="17" y1="7" x2="17" y2="7.01" />
      <line x1="17" y1="11" x2="17" y2="11.01" />
      <line x1="17" y1="15" x2="17" y2="15.01" />
    </svg>
  );
};

interface VulcProps {}

export default Vulc;
