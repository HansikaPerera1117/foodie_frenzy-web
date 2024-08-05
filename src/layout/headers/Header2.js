import Link from "next/link";
import Menus from "./Menus";
import SearchBtn from "./SearchBtn";

const Header2 = ({ openSearchModal }) => {
  return (
    <header className="header-area">
      {/*=== Header Navigation ===*/}
      <div className="header-navigation pt-10 pb-10 px-3 ">
        <div className="nav-overlay" />
        <div className="container-fluid">
          {/*=== Primary Menu ===*/}
          <div className="primary-menu">
            {/*=== Site Branding ===*/}
            <div className="site-branding">
              <Link legacyBehavior href="/">
                <a className="brand-logo">
                  <img
                    src="assets/images/logo/logo-black.png"
                    alt="Site Logo"
                    style={{ height: "auto", width: 150 }}
                  />
                </a>
              </Link>
            </div>
            {/*=== Nav Inner Menu ===*/}
            <div className="nav-inner-menu">
              <div className="nav-menu">
                {/*=== Mobile Logo ===*/}
                <div className="mobile-logo mb-30 d-block d-xl-none text-center">
                  <Link legacyBehavior href="/">
                    <a className="brand-logo">
                      <img
                        src="assets/images/logo/logo-black.png"
                        alt="Site Logo"
                        style={{ height: "auto", width: 150 }}
                      />
                    </a>
                  </Link>
                </div>
                {/*=== Main Menu ===*/}
                <Menus />
                {/*=== Nav Button ===*/}
                <div className="menu-button mt-40 d-xl-none">
                  <Link legacyBehavior href="/contact">
                    <a className="main-btn btn-red">
                      Book a Table
                      <i className="fas fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              {/*=== Nav right Item ===*/}
              <div className="nav-right-item d-flex align-items-center">
                <div className="nav-call-button"></div>
                <div className="menu-button d-xl-block d-none">
                  <Link legacyBehavior href="/contact">
                    <a className="main-btn btn-red">
                      Book a Table
                      <i className="fas fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="navbar-toggler">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header2;
