import React from "react";
import './TextSpinner.css'

export default function TextSpinner() {
  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <svg viewBox="0 0 1320 300">
      <text x="50%" y="50%" dy=".35em" text-anchor="middle">
        Generating ID
      </text>
    </svg>
    </div>
  );
}
