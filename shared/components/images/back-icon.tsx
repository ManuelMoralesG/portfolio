import { SVGProps } from "react";

type BackIconProps = SVGProps<SVGSVGElement>;

export default function BackIcon({ className, ...props }: BackIconProps) {
  return (
    <svg
      width="63"
      height="72"
      viewBox="0 0 63 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M24.0361 13.4864C25.9024 11.6258 28.9316 11.6258 30.7979 13.4864C32.6074 15.2906 32.6635 18.1855 30.9668 20.0577L30.7979 20.2354L20.0762 30.9356H53.873C56.5122 30.9358 58.6512 33.0636 58.6514 35.7022C58.6514 38.3409 56.5123 40.4695 53.873 40.4698H20.0674L30.8096 51.169C32.6775 53.0313 32.6775 56.0567 30.8096 57.919C28.9434 59.7793 25.9151 59.7791 24.0488 57.919L5.15625 39.0831C3.53192 37.4636 3.32083 34.9659 4.52148 33.1172L4.43359 33.0303L5.14355 32.3223L24.0361 13.4864Z"
        fill="white"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  );
}
