import { useRouter } from "next/router";
import Link from "next/link";

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

  return (
    <header>
      <div className="container">
        <nav>
          <ul>
            {navigationItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={pathname === item.href ? "active" : ""}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
