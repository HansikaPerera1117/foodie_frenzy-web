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
        <li className="menu-item has-children">
          <Link legacyBehavior href="gallery">
            Our Gallery
          </Link>
        </li>
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
          <Link legacyBehavior href="about">
            About
          </Link>
        </li>
        <li className="menu-item has-children">
          <a href="#" onClick={() => active("Shop")}>
            Shop
            <span className={`dd-trigger ${activeIcon("Shop")}`}>
              <i className="far fa-angle-down" />
            </span>
          </a>
          <ul className="sub-menu" style={activeSubMenu("Shop")}>
            <li>
              <Link legacyBehavior href="products">
                Our Products
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="product-details">
                Product Details
              </Link>
            </li>
          </ul>
        </li>
        <li className="menu-item has-children">
          <a href="#" onClick={() => active("Blog")}>
            Blog
            <span className={`dd-trigger ${activeIcon("Blog")}`}>
              <i className="far fa-angle-down" />
            </span>
          </a>
          <ul className="sub-menu" style={activeSubMenu("Blog")}>
            <li>
              <Link legacyBehavior href="blog-standard">
                Blog Standard
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="blog-details">
                Blog Details
              </Link>
            </li>
          </ul>
        </li>
        <li className="menu-item has-children">
          <a href="#" onClick={() => active("Pages")}>
            Pages
            <span className={`dd-trigger ${activeIcon("Pages")}`}>
              <i className="far fa-angle-down" />
            </span>
          </a>
          <ul className="sub-menu" style={activeSubMenu("Pages")}>
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
              <Link legacyBehavior href="reservations">
                Reservations
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="404">
                404
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="faq">
                Faq
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="contact">
                Contact
              </Link>
            </li>
          </ul>
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
