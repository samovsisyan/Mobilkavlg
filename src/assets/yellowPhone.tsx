import * as React from "react";
const SVGComponent = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M29.5 14H19.5C18.3954 14 17.5 14.8954 17.5 16V32C17.5 33.1046 18.3954 34 19.5 34H29.5C30.6046 34 31.5 33.1046 31.5 32V16C31.5 14.8954 30.6046 14 29.5 14Z"
      stroke="#1E40AF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24.5 30H24.51"
      stroke="#1E40AF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SVGComponent;
