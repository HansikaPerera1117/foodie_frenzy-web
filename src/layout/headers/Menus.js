import Link from "next/link";
import { Fragment, useState } from "react";

const DeskTopMenus = () => {
  return (
    <nav className="main-menu desktop-menu">
      <ul>
        <li className="menu-item has-children">
          <Link legacyBehavior href="/">
            Home
          </Link>
        </li>
        <li className="menu-item has-children">
          <Link legacyBehavior href="menu">
            Menu
          </Link>
        </li>
        <li className="menu-item has-children">
          <a href="#">
            About
            <span className="dd-trigger">
              <i className="far fa-angle-down" />
            </span>
          </a>
          <ul className="sub-menu">
            <li className="menu-item">
              <Link legacyBehavior href="about">
                About
              </Link>
            </li>
            <li className="menu-item">
              <Link legacyBehavior href="branches">
                Branches
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="gallery">
                Our Gallery
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="chefs">
                Our Chefs
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="history">
                Our History
              </Link>
            </li>

            <li>
              <Link legacyBehavior href="faq">
                Faq
              </Link>
            </li>
          </ul>
        </li>
        <li className="menu-item has-children">
          <Link legacyBehavior href="products">
            Shop
          </Link>
        </li>
        <li className="menu-item has-children">
          <Link legacyBehavior href="reservations">
            Reservations
          </Link>
        </li>
        <li className="menu-item has-children">
          <Link legacyBehavior href="blog">
            Blog
          </Link>
        </li>
        {/* <li className="menu-item has-children">
          <Link legacyBehavior href="gallery">
            Our Gallery
          </Link>
        </li> */}
        <li className="menu-item has-children">
          <Link legacyBehavior href="contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const active = (value) => setActiveMenu(value === activeMenu ? null : value),
    activeIcon = (value) => (activeMenu == value ? "sub-menu-open" : ""),
    activeSubMenu = (value) =>
      value == activeMenu ? { display: "block" } : { display: "none" };
  return (
    <nav className="main-menu mobile-menu">
      <ul>
        <li className="menu-item has-children">
          <a href="/" onClick={() => active("home")}>
            Home
          </a>
        </li>
        <li className="menu-item has-children">
          <a href="/menu" onClick={() => active("Menu")}>
            Menu
          </a>
        </li>
        <li className="menu-item">
          <a href="#" onClick={() => active("about")}>
            About
            <span className={`dd-trigger ${activeIcon("about")}`}>
              <i className="far fa-angle-down" />
            </span>
          </a>
          <ul className="sub-menu" style={activeSubMenu("about")}>
            <li className="menu-item">
              <Link legacyBehavior href="about">
                About
              </Link>
            </li>
            <li className="menu-item">
              <Link legacyBehavior href="branches">
                Branches
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="gallery">
                Our Gallery
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="chefs">
                Our Chefs
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="history">
                Our History
              </Link>
            </li>

            <li>
              <Link legacyBehavior href="faq">
                Faq
              </Link>
            </li>
          </ul>
        </li>
        <li className="menu-item has-children">
          <a href="/products" onClick={() => active("products")}>
            Shop
          </a>
        </li>
        <li className="menu-item has-children">
          <a href="/reservations" onClick={() => active("reservations")}>
            Reservations
          </a>
        </li>
        <li className="menu-item has-children">
          <a href="/blog" onClick={() => active("blog")}>
            Blog
          </a>
        </li>
        <li className="menu-item has-children">
          <a href="/contact" onClick={() => active("contact")}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

const Menus = () => {
  return (
    <Fragment>
      <DeskTopMenus />
      <MobileMenu />
    </Fragment>
  );
};

export default Menus;
