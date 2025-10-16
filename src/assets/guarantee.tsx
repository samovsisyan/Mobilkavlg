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
      d="M32 25C32 30 28.5 32.5 24.34 33.95C24.1222 34.0238 23.8855 34.0203 23.67 33.94C19.5 32.5 16 30 16 25V18C16 17.7348 16.1054 17.4805 16.2929 17.2929C16.4804 17.1054 16.7348 17 17 17C19 17 21.5 15.8 23.24 14.28C23.4519 14.099 23.7214 13.9996 24 13.9996C24.2786 13.9996 24.5481 14.099 24.76 14.28C26.51 15.81 29 17 31 17C31.2652 17 31.5196 17.1054 31.7071 17.2929C31.8946 17.4805 32 17.7348 32 18V25Z"
      stroke="#1E40AF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SVGComponent;
