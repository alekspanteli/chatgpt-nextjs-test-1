import { useRouter } from "next/router";
import Link from "next/link";
import classNames from "classnames";
import Container from "./Container";

const Header = () => {
  const router = useRouter();
  const pathname = router.pathname;

  const navigationItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  const getLinkClassName = (pathname, href) => {
    return classNames("header__nav-link", {
      "header__nav-link--active": pathname === href,
    });
  };

  return (
    <header className="header">
      <Container className="header__container">
        <Link href="/" className="header__logo">
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
        <nav className="header__nav">
          <ul>
            {navigationItems.map((item, index) => (
              <li key={index} className="header__nav-item">
                <Link
                  href={item.href}
                  title={item.label}
                  className={getLinkClassName(pathname, item.href)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
