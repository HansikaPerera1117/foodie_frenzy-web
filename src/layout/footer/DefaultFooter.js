import Link from "next/link";

const DefaultFooter = () => {
  return (
    <footer className="footer-dark dark-black-bg text-white p-r z-1 pt-80">
      {/*=== Footer Widget ===*/}
      <div className="footer-widget-area pb-10">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget about-company-widget pr-lg-30 mb-40 wow fadeInUp">
                <div className="footer-content">
                  <Link legacyBehavior href="/">
                    <a className="footer-logo mb-30">
                      <img
                        src="assets/images/logo/logo-white.png"
                        alt="Brand Logo"
                        style={{height:"auto",width:250}}
                      />
                    </a>
                  </Link>
                  <p>
                    Sit amet consectetur adipiscing elitsue risus mauris adipis
                  </p>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form_group">
                      <label>
                        <i className="far fa-arrow-right" />
                      </label>
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Email Address"
                        name="email"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-widget footer-nav-widget pl-lg-30 mb-40 wow fadeInDown">
                <h4 className="widget-title">Quick Links</h4>
                <div className="footer-nav-content">
                  <ul className="footer-nav">
                    <li>
                      <a href="#">About Company</a>
                    </li>
                    <li>
                      <a href="#">Home Shop</a>
                    </li>
                    <li>
                      <a href="#">Our Menu (CMS)</a>
                    </li>
                    <li>
                      <a href="#">Shop (Ecom)</a>
                    </li>
                    <li>
                      <a href="#">Recipes</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="footer-widget footer-nav-widget-two pl-lg-70 mb-40 wow fadeInUp">
                <h4 className="widget-title">Quick Links</h4>
                <div className="footer-nav-content">
                  <ul className="footer-nav">
                    <li>
                      <a href="#">Hamburger</a>
                    </li>
                    <li>
                      <a href="#">Chicken Burger</a>
                    </li>
                    <li>
                      <a href="#">Vegetable Pizza</a>
                    </li>
                    <li>
                      <a href="#">Chicken Roll</a>
                    </li>
                    <li>
                      <a href="#">Ice-Cream</a>
                    </li>
                  </ul>
                  <ul className="footer-nav">
                    <li>
                      <a href="#">Potato</a>
                    </li>
                    <li>
                      <a href="#">Organic Juice</a>
                    </li>
                    <li>
                      <a href="#">Lemon Juice</a>
                    </li>
                    <li>
                      <a href="#">MuTton Tikka</a>
                    </li>
                    <li>
                      <a href="#">Seafoods</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget contact-info-widget pl-lg-70 mb-40 wow fadeInDown">
                <div className="contact-info-box mb-20">
                  <span className="title">Call for order:</span>
                  <h3>
                    <a href="tel:+125865892">+1 2586 5892</a>
                  </h3>
                  <p>
                    <a href="mailto:hello@example.com">hello@example.com</a>
                  </p>
                </div>
                <div className="contact-info-box mb-20">
                  <span className="title">Location :</span>
                  <p>119 Tanglewood Lane Gulfport, MS 39503</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=== Copyright Area ===*/}
      <div className="copyright-area border-top-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="copyright-text">
                <p>© 2023 Qichen, All Rights Reserved</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="copyright-nav float-lg-end">
                <ul>
                  <li>
                    <a href="#">Setting &amp; Privacy</a>
                  </li>
                  <li>
                    <a href="#">Faqs</a>
                  </li>
                  <li>
                    <a href="#">Food Menu</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default DefaultFooter;
