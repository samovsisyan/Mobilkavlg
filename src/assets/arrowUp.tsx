import * as React from "react";
const SVGComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.00002 11.3998C7.85002 11.3998 7.72502 11.3498 7.60002 11.2498L1.85002 5.5998C1.62502 5.3748 1.62502 5.0248 1.85002 4.7998C2.07502 4.5748 2.42502 4.5748 2.65002 4.7998L8.00002 10.0248L13.35 4.7498C13.575 4.5248 13.925 4.5248 14.15 4.7498C14.375 4.9748 14.375 5.3248 14.15 5.5498L8.40002 11.1998C8.27502 11.3248 8.15002 11.3998 8.00002 11.3998Z"
      fill="#111827"
    />
  </svg>
);
export default SVGComponent;
