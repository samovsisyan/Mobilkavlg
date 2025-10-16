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
      d="M32 22C32 26.993 26.461 32.193 24.601 33.799C24.4277 33.9293 24.2168 33.9998 24 33.9998C23.7832 33.9998 23.5723 33.9293 23.399 33.799C21.539 32.193 16 26.993 16 22C16 19.8783 16.8429 17.8434 18.3431 16.3431C19.8434 14.8429 21.8783 14 24 14C26.1217 14 28.1566 14.8429 29.6569 16.3431C31.1571 17.8434 32 19.8783 32 22Z"
      stroke="#1E40AF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 25C25.6569 25 27 23.6569 27 22C27 20.3431 25.6569 19 24 19C22.3431 19 21 20.3431 21 22C21 23.6569 22.3431 25 24 25Z"
      stroke="#1E40AF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SVGComponent;
