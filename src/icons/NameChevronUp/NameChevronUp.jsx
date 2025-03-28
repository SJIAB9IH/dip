import React from "react";

export const NameChevronUp = ({ color = "#2B2D33", className }) => {
  return (
    <svg
      className={`name-chevron-up ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M18 14L12 8L6 14"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
