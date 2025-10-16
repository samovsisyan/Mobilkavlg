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
      d="M13.75 21.9506C18.8033 21.4489 22.75 17.1853 22.75 12C22.75 6.47715 18.2728 2 12.75 2C7.22715 2 2.75 6.47715 2.75 12C2.75 16.8379 6.18552 20.8734 10.75 21.8V16H7.75V13H10.75V9.79586C10.75 7.47449 12.7195 5.64064 15.035 5.80603L17.75 5.99996V8.99996H15.75C14.6454 8.99996 13.75 9.89539 13.75 11V13H17.75L16.75 16H13.75V21.9506Z"
      fill="white"
    />
  </svg>
);
export default SVGComponent;
