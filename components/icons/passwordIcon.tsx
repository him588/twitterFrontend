import { iconProp } from "@/types";
import React from "react";

function PasswordIcon({ h, w, c }: iconProp) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill="none"
      viewBox="0 0 24 24"
    >
      <g>
        <path
          stroke={c}
          strokeLinecap="round"
          strokeWidth="1.5"
          d="M22 12c0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172.654.653.943 1.528 1.07 2.828"
        ></path>
        <path
          fill={c}
          d="M9 12a1 1 0 11-2 0 1 1 0 012 0zM13 12a1 1 0 11-2 0 1 1 0 012 0zM17 12a1 1 0 11-2 0 1 1 0 012 0z"
        ></path>
      </g>
    </svg>
  );
}

export default PasswordIcon;
