import * as React from "react";
const SVGComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={56}
    height={57}
    viewBox="0 0 56 57"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 28.5C0 13.036 12.536 0.5 28 0.5C43.464 0.5 56 13.036 56 28.5C56 43.964 43.464 56.5 28 56.5C12.536 56.5 0 43.964 0 28.5Z"
      fill="#F4CD1C"
    />
    <path
      d="M41.068 25.8333C41.6769 28.8217 41.243 31.9285 39.8385 34.6357C38.434 37.3429 36.1439 39.4867 33.35 40.7097C30.5562 41.9328 27.4275 42.161 24.4857 41.3565C21.544 40.5519 18.9669 38.7632 17.1844 36.2885C15.4018 33.8139 14.5215 30.803 14.6902 27.7578C14.859 24.7127 16.0665 21.8174 18.1115 19.5549C20.1566 17.2923 22.9155 15.7992 25.9281 15.3246C28.9407 14.85 32.0251 15.4225 34.6667 16.9467"
      stroke="#1E40AF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 27.1666L28 31.1666L41.3333 17.8333"
      stroke="#1E40AF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SVGComponent;
