import * as React from "react";
const SVGComponent = (props) => (
  <svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_582_22381)">
      <path
        d="M24.0504 4.0499L20.5254 20.5499C20.2629 21.7124 19.5879 21.9749 18.6129 21.4499L13.3254 17.5499L10.738 20.0249C10.4755 20.2874 10.213 20.5499 9.61295 20.5499L10.0254 15.1124L19.8879 6.1499C20.3004 5.7374 19.7754 5.5874 19.2505 5.9249L6.98795 13.6499L1.70045 12.0374C0.53795 11.6624 0.53795 10.8749 1.96295 10.3499L22.5129 2.3624C23.5254 2.0624 24.388 2.5874 24.0504 4.0499Z"
        fill="#1E40AF"
      />
    </g>
    <defs>
      <clipPath id="clip0_582_22381">
        <rect width={24} height={24} fill="white" transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>
);
export default SVGComponent;
