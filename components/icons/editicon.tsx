import { iconProp } from "@/types";
import React from "react";

function EditIcon({ h, w, c }: iconProp) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill="none"
      viewBox="0 0 24 24"
    >
      <g
        stroke={c}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path d="M21.28 6.4l-9.54 9.54c-.95.95-3.77 1.39-4.4.76-.63-.63-.2-3.45.75-4.4l9.55-9.55a2.58 2.58 0 113.64 3.65v0z"></path>
        <path d="M11 4H6a4 4 0 00-4 4v10a4 4 0 004 4h11c2.21 0 3-1.8 3-4v-5"></path>
      </g>
    </svg>
  );
}

export default EditIcon;
