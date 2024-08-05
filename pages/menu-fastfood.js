import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Partners from "../src/components/Partners";
import ReservationsFrom from "../src/components/ReservationsFrom";
import Layout from "../src/layout/Layout";
const MenuFastFood = () => {
  return (
    <Layout>
      <PageBanner pageName={"Fastfood"} title="Menu" />
      {/*====== End Breadcrumb Section ======*/}
      {/*=== Start Menu Section ===*/}
      <section className="menu-section pt-125 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div className="section-title text-center mb-50 wow fadeInUp">
                <span className="sub-title">Best food menu</span>
                <h2>Choose Your Best Menus</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="menu-img-box mb-50 pl-lg-30 wow fadeInLeft">
                <img
                  src="assets/images/menu/menu-single-1.jpg"
                  alt="Menu Image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="menu-content-box mb-50 wow fadeInUp">
                <div className="single-menu-item mb-30">
                  <div className="thumb">
                    <img src="assets/images/menu/thumb-1.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="item-title-price">
                      <Link legacyBehavior href="/menu-fastfood">
                        <a className="item-title">Hamburger</a>
                      </Link>
                      <span className="dot-border" />
                      <span className="price">$25</span>
                    </h3>
                    <p>Roasted langoustine, consommé</p>
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <span>
                          <a href="#">(5k Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="single-menu-item mb-30 wow fadeInUp">
                  <div className="thumb">
                    <img src="assets/images/menu/thumb-2.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="item-title-price">
                      <Link legacyBehavior href="/menu-fastfood">
                        <a className="item-title">Pizza</a>
                      </Link>
                      <span className="dot-border" />
                      <span className="price">$63</span>
                    </h3>
                    <p>Roasted langoustine, consommé</p>
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <span>
                          <a href="#">(5k Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="single-menu-item mb-30 wow fadeInUp">
                  <div className="thumb">
                    <img src="assets/images/menu/thumb-3.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="item-title-price">
                      <Link legacyBehavior href="/menu-fastfood">
                        <a className="item-title">Baked Chicken Wings</a>
                      </Link>
                      <span className="dot-border" />
                      <span className="price">$199</span>
                    </h3>
                    <p>Roasted langoustine, consommé</p>
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <span>
                          <a href="#">(5k Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="single-menu-item mb-30 wow fadeInUp">
                  <div className="thumb">
                    <img src="assets/images/menu/thumb-4.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="item-title-price">
                      <Link legacyBehavior href="/menu-fastfood">
                        <a className="item-title">Seafood Pizza</a>
                      </Link>
                      <span className="dot-border" />
                      <span className="price">$352</span>
                    </h3>
                    <p>Roasted langoustine, consommé</p>
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <span>
                          <a href="#">(5k Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center pt-80">
            <div className="col-lg-6">
              <div className="menu-content-box pl-lg-30 mb-50 wow fadeInUp">
                <div className="single-menu-item mb-30">
                  <div className="thumb">
                    <img src="assets/images/menu/thumb-5.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="item-title-price">
                      <Link legacyBehavior href="/menu-fastfood">
                        <a className="item-title">Pasta Fettuccine</a>
                      </Link>
                      <span className="dot-border" />
                      <span className="price">$25</span>
                    </h3>
                    <p>Roasted langoustine, consommé</p>
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <span>
                          <a href="#">(5k Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="single-menu-item mb-30 wow fadeInUp">
                  <div className="thumb">
                    <img src="assets/images/menu/thumb-6.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="item-title-price">
                      <Link legacyBehavior href="/menu-fastfood">
                        <a className="item-title">Submarine Sandwich</a>
                      </Link>
                      <span className="dot-border" />
                      <span className="price">$78</span>
                    </h3>
                    <p>Roasted langoustine, consommé</p>
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <span>
                          <a href="#">(5k Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="single-menu-item mb-30 wow fadeInUp">
                  <div className="thumb">
                    <img src="assets/images/menu/thumb-7.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="item-title-price">
                      <Link legacyBehavior href="/menu-fastfood">
                        <a className="item-title">Chicken Biryani</a>
                      </Link>
                      <span className="dot-border" />
                      <span className="price">$205</span>
                    </h3>
                    <p>Roasted langoustine, consommé</p>
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <span>
                          <a href="#">(5k Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="single-menu-item mb-30 wow fadeInUp">
                  <div className="thumb">
                    <img src="assets/images/menu/thumb-8.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="item-title-price">
                      <Link legacyBehavior href="/menu-fastfood">
                        <a className="item-title">Shawarma-roll</a>
                      </Link>
                      <span className="dot-border" />
                      <span className="price">$352</span>
                    </h3>
                    <p>Roasted langoustine, consommé</p>
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <span>
                          <a href="#">(5k Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="menu-img-box mb-50 pl-lg-40 wow fadeInRight">
                <img
                  src="assets/images/menu/menu-single-2.jpg"
                  alt="Menu Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=== End Menu Section ===*/}
      {/*=== Start Reservation Section ===*/}
      <section className="reservation-section light-red-bg pt-100 pb-50">
        <div className="container">
          <div className="reservation-wrapper-one p-r z-1">
            <div className="reservation-after-img wow fadeInRight">
              <img
                src="assets/images/contact/contact-3.jpg"
                alt="contact image"
              />
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="reservation-two_image-box ml-minus-lg-60 mb-50 wow fadeInLeft">
                  <img
                    src="assets/images/contact/contact-2.jpg"
                    alt="Contact Image"
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="reservation-content-box mb-50 wow fadeInUp">
                  <div className="section-title section-title-left mb-35">
                    <span className="sub-title">Booking table</span>
                    <h2>Make A Reservations</h2>
                  </div>
                  <div className="reservation-style-three">
                    <ReservationsFrom btnLeft />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=== End Reservation Section ===*/}
      {/*=== Start Instagram Section ===*/}
      <section className="instagram-gallery pt-130 pb-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="instagram-box mb-30 wow fadeInUp">
                <div className="instagram-img">
                  <img
                    src="assets/images/instagram/insta-1.jpg"
                    alt="Instagram Image"
                  />
                  <div className="insta-overlay" />
                  <a
                    href="assets/images/instagram/insta-1.jpg"
                    className="img-popup insta-icon"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="instagram-box mb-30 wow fadeInDown">
                <div className="instagram-img">
                  <img
                    src="assets/images/instagram/insta-2.jpg"
                    alt="Instagram Image"
                  />
                  <div className="insta-overlay" />
                  <a
                    href="assets/images/instagram/insta-2.jpg"
                    className="img-popup insta-icon"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="instagram-box mb-30 wow fadeInUp">
                <div className="instagram-img">
                  <img
                    src="assets/images/instagram/insta-3.jpg"
                    alt="Instagram Image"
                  />
                  <div className="insta-overlay" />
                  <a
                    href="assets/images/instagram/insta-3.jpg"
                    className="img-popup insta-icon"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="instagram-box mb-30 wow fadeInDown">
                <div className="instagram-img">
                  <img
                    src="assets/images/instagram/insta-4.jpg"
                    alt="Instagram Image"
                  />
                  <div className="insta-overlay" />
                  <a
                    href="assets/images/instagram/insta-4.jpg"
                    className="img-popup insta-icon"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="instagram-box mb-30 wow fadeInUp">
                <div className="instagram-img">
                  <img
                    src="assets/images/instagram/insta-5.jpg"
                    alt="Instagram Image"
                  />
                  <div className="insta-overlay" />
                  <a
                    href="assets/images/instagram/insta-5.jpg"
                    className="img-popup insta-icon"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="instagram-box mb-30 wow fadeInDown">
                <div className="instagram-img">
                  <img
                    src="assets/images/instagram/insta-6.jpg"
                    alt="Instagram Image"
                  />
                  <div className="insta-overlay" />
                  <a
                    href="assets/images/instagram/insta-6.jpg"
                    className="img-popup insta-icon"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="instagram-box mb-30 wow fadeInUp">
                <div className="instagram-img">
                  <img
                    src="assets/images/instagram/insta-7.jpg"
                    alt="Instagram Image"
                  />
                  <div className="insta-overlay" />
                  <a
                    href="assets/images/instagram/insta-7.jpg"
                    className="img-popup insta-icon"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="instagram-box mb-30 wow fadeInDown">
                <div className="instagram-img">
                  <img
                    src="assets/images/instagram/insta-8.jpg"
                    alt="Instagram Image"
                  />
                  <div className="insta-overlay" />
                  <a
                    href="assets/images/instagram/insta-8.jpg"
                    className="img-popup insta-icon"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="instagram-box mb-30 wow fadeInUp">
                <div className="instagram-img">
                  <img
                    src="assets/images/instagram/insta-9.jpg"
                    alt="Instagram Image"
                  />
                  <div className="insta-overlay" />
                  <a
                    href="assets/images/instagram/insta-9.jpg"
                    className="img-popup insta-icon"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="instagram-box mb-30 wow fadeInDown">
                <div className="instagram-img">
                  <img
                    src="assets/images/instagram/insta-10.jpg"
                    alt="Instagram Image"
                  />
                  <div className="insta-overlay" />
                  <a
                    href="assets/images/instagram/insta-10.jpg"
                    className="img-popup insta-icon"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="instagram-box mb-30 wow fadeInUp">
                <div className="instagram-img">
                  <img
                    src="assets/images/instagram/insta-11.jpg"
                    alt="Instagram Image"
                  />
                  <div className="insta-overlay" />
                  <a
                    href="assets/images/instagram/insta-11.jpg"
                    className="img-popup insta-icon"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="instagram-box mb-30 wow fadeInDown">
                <div className="instagram-img">
                  <img
                    src="assets/images/instagram/insta-12.jpg"
                    alt="Instagram Image"
                  />
                  <div className="insta-overlay" />
                  <a
                    href="assets/images/instagram/insta-12.jpg"
                    className="img-popup insta-icon"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=== End Instagram Section ===*/}
      {/*====== Start Partners Section ======*/}
      <Partners />
    </Layout>
  );
};
export default MenuFastFood;
