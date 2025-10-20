import * as React from "react";
const SVGComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.5 21.9506C18.5533 21.4489 22.5 17.1853 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 16.8379 5.93552 20.8734 10.5 21.8V16H7.5V13H10.5V9.79586C10.5 7.47449 12.4695 5.64064 14.785 5.80603L17.5 5.99996V8.99996H15.5C14.3954 8.99996 13.5 9.89539 13.5 11V13H17.5L16.5 16H13.5V21.9506Z"
      fill="#1E40AF"
    />
  </svg>
);
export default SVGComponent;
