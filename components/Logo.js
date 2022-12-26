import Link from "next/link";
import classnames from "classnames";

const Logo = ({ className, ...rest }) => (
  <Link href="/" className={classnames("header__logo", className)} {...rest}>
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="50" fill="#FFC107" />
      <path d="M50 50L75 75L25 75Z" fill="#212121" />
    </svg>
  </Link>
);

export default Logo;
