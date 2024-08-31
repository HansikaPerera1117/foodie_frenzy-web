import Link from "next/link";
import Menus from "./Menus";
import React, { useEffect, useState } from "react";
// import { logout } from "../../util/CommonFun";

const Header2 = ({ openSearchModal }) => {
  const [isLogin, setIsLogin] = useState(false); //convert to redux
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    setIsLogin(localStorage.getItem("CUSTOMER") ? true : false);
    setCartTotal(
      localStorage.getItem("CART_LIST")
        ? JSON.parse(localStorage.getItem("CART_LIST")).length
        : 0
    );
  }, []);

  const handleLogout = () => {
    setIsLogin(false);
    // logout();
  };

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
                  <div className="nav-call-button mb-3">
                    {isLogin ? (
                      <a
                        onClick={() => {
                          handleLogout();
                        }}
                        className="main-btn btn-black"
                        style={{
                          padding: "15px 20px",
                        }}
                      >
                        LogOut
                      </a>
                    ) : (
                      <Link legacyBehavior href="/login">
                        <a
                          className="main-btn btn-black"
                          style={{
                            padding: "15px 20px",
                          }}
                        >
                          Login
                        </a>
                      </Link>
                    )}
                  </div>
                  <div
                    className="nav-call-button mb-3 "
                    style={{ position: "relative" }}
                  >
                    <a
                      href="/cart"
                      className="main-btn btn-red "
                      style={{
                        padding: "20px 20px",
                      }}
                    >
                      <i
                        className="fas fa-shopping-cart"
                        style={{ position: "relative", right: 6 }}
                      />
                    </a>
                    <i className="cart-number">{cartTotal}</i>
                  </div>
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
                <div className="menu-button d-xl-block d-none">
                  {isLogin ? (
                    <a
                      onClick={() => {
                        handleLogout();
                      }}
                      className="main-btn btn-black"
                      style={{
                        padding: "15px 20px",
                      }}
                    >
                      LogOut
                    </a>
                  ) : (
                    <Link legacyBehavior href="/login">
                      <a
                        className="main-btn btn-black"
                        style={{
                          padding: "15px 20px",
                        }}
                      >
                        Login
                      </a>
                    </Link>
                  )}
                </div>
                <div
                  className="menu-button d-xl-block d-none"
                  style={{ position: "relative" }}
                >
                  <a
                    href="/cart"
                    className="main-btn btn-red"
                    style={{
                      padding: "20px 20px",
                    }}
                  >
                    <i
                      className="fas fa-shopping-cart"
                      style={{ position: "relative", right: 6 }}
                    />
                  </a>
                  <i className="cart-number">{cartTotal}</i>
                </div>
                <div className="menu-button d-xl-block d-none">
                  <Link legacyBehavior href="/reservations">
                    <a className="main-btn btn-red">
                      Book a Table
                      {/* <i className="fas fa-long-arrow-right" /> */}
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
