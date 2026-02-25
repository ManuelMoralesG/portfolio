import { SVGProps } from "react";

type LinkedInIconProps = SVGProps<SVGSVGElement>;

export default function LinkedInIcon({
  className,
  ...props
}: LinkedInIconProps) {
  return (
    <svg
      width="62"
      height="62"
      viewBox="0 0 62 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect width="61.9026" height="61.9026" fill="none" stroke="none" />
      <path
        d="M20.6345 28.372V41.2684M20.6345 20.6342V20.66M30.9516 41.2684V28.372M41.2687 41.2684V33.5306C41.2687 32.1625 40.7252 30.8504 39.7578 29.8829C38.7904 28.9155 37.4783 28.372 36.1101 28.372C34.742 28.372 33.4299 28.9155 32.4625 29.8829C31.4951 30.8504 30.9516 32.1625 30.9516 33.5306M10.3174 15.4757C10.3174 14.1075 10.8609 12.7954 11.8283 11.828C12.7957 10.8606 14.1078 10.3171 15.4759 10.3171H46.4272C47.7954 10.3171 49.1075 10.8606 50.0749 11.828C51.0423 12.7954 51.5858 14.1075 51.5858 15.4757V46.427C51.5858 47.7951 51.0423 49.1072 50.0749 50.0746C49.1075 51.042 47.7954 51.5855 46.4272 51.5855H15.4759C14.1078 51.5855 12.7957 51.042 11.8283 50.0746C10.8609 49.1072 10.3174 47.7951 10.3174 46.427V15.4757Z"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
