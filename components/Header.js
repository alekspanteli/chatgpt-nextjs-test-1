import { useRouter } from "next/router";
import Link from "next/link";
import classNames from "classnames";
import Container from "./Container";
import Logo from "./Logo";

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
        <Logo title="Logo" />
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
