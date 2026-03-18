import React from "react";

export default function BlenderIcon({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M15 14m-6 0a6 5 0 1 0 12 0a6 5 0 1 0 -12 0" />
      <path d="M15 14m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M3 16l9 -6.5" />
      <path d="M6 9h9" />
      <path d="M13 5l5.65 5" />
    </svg>
  );
}
