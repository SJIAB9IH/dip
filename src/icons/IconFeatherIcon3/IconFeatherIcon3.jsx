import React from "react";

export const IconFeatherIcon3 = ({ color = "#555A65", className }) => {
  return (
    <svg
      className={`icon-feather-icon-3 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M6 10L12 16L18 10"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};