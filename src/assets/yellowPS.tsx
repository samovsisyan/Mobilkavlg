import * as React from "react";
const SVGComponent = (props) => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
      fill="#F4CD1C"
    />
    <path
      d="M32 15H16C14.8954 15 14 15.8954 14 17V27C14 28.1046 14.8954 29 16 29H32C33.1046 29 34 28.1046 34 27V17C34 15.8954 33.1046 15 32 15Z"
      stroke="#1E40AF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 33H28"
      stroke="#1E40AF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 29V33"
      stroke="#1E40AF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SVGComponent;
