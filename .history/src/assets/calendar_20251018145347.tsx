import * as React from "react";
const SVGComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={49}
    height={48}
    viewBox="0 0 49 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0.5 24C0.5 10.7452 11.2452 0 24.5 0C37.7548 0 48.5 10.7452 48.5 24C48.5 37.2548 37.7548 48 24.5 48C11.2452 48 0.5 37.2548 0.5 24Z"
      fill="#F4CD1C"
    />
    <path
      d="M21 14V18"
      stroke="#1E40AF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M29 14V18"
      stroke="#1E40AF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M32 16H18C16.8954 16 16 16.8954 16 18V32C16 33.1046 16.8954 34 18 34H32C33.1046 34 34 33.1046 34 32V18C34 16.8954 33.1046 16 32 16Z"
      stroke="#1E40AF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 22H34"
      stroke="#1E40AF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SVGComponent;
