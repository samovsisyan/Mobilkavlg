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
      d="M13.75 11.4002C13.6 11.4002 13.475 11.3502 13.35 11.2502L8.00002 5.9752L2.65002 11.2252C2.42502 11.4502 2.07502 11.4502 1.85002 11.2252C1.62502 11.0002 1.62502 10.6502 1.85002 10.4252L7.60002 4.7752C7.82502 4.5502 8.17502 4.5502 8.40002 4.7752L14.15 10.4252C14.375 10.6502 14.375 11.0002 14.15 11.2252C14.05 11.3252 13.9 11.4002 13.75 11.4002Z"
      fill="#111827"
    />
  </svg>
);
export default SVGComponent;
