import { iconProp } from "@/types";
import React from "react";

function EmailIcon({ h, w, c }: iconProp) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill="none"
      viewBox="0 0 24 24"
    >
      <g stroke={c} strokeLinecap="round" strokeWidth="1">
        <path
          strokeLinejoin="round"
          d="M4 7l6.2 4.65a3 3 0 003.6 0L20 7"
        ></path>
        <rect width="18" height="14" x="3" y="5" rx="2"></rect>
      </g>
    </svg>
  );
}

export default EmailIcon;
