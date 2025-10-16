import * as React from "react";
const SVGComponent = (props) => (
  <svg
    width={20}
    height={30}
    viewBox="0 0 20 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.6437 29.6125H14.5747V4.36911H12.3112C8.16683 4.36911 5.99898 6.45402 5.99898 9.56534C5.99898 13.0936 7.49735 14.7295 10.5897 16.8144L13.1401 18.5465L5.8077 29.6125H0.356201L6.95538 19.7333C3.16165 17.0068 1.02568 14.3446 1.02568 9.85402C1.02568 4.24081 4.91506 0.423828 12.2794 0.423828H19.6118V29.6125H19.6437Z"
      fill="#FC3F1D"
    />
  </svg>
);
export default SVGComponent;
