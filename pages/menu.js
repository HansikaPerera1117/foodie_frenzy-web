import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Partners from "../src/components/Partners";
import MenuSliderOne from "../src/components/slider/MenuSliderOne";
import Layout from "../src/layout/Layout";
import GalleryImages from "../src/components/slider/GalleryImages";
const MenuSeaFood = () => {
  
  const popularMenu = [
    {
      key: 1,
      comp: (
        <div className="col-lg-6 col-md-12">
          <div className="single-menu-item-three mb-30 wow fadeInUp">
            <div className="thumb">
              <img src="assets/images/menu/thumb-9.png" alt="Menu Image" />
            </div>
            <div className="text">
              <h3 className="item-title-price">
                <Link legacyBehavior href="/menu-fastfood">
                  <a className="item-title">Red king Crab</a>
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
        </div>
      ),
    },
    {
      key: 2,
      comp: (
        <div className="col-lg-6 col-md-12">
          <div className="single-menu-item-three mb-30 wow fadeInUp">
            <div className="thumb">
              <img src="assets/images/menu/thumb-11.png" alt="Menu Image" />
            </div>
            <div className="text">
              <h3 className="item-title-price">
                <Link legacyBehavior href="/menu-fastfood">
                  <a className="item-title">Boston Lobster</a>
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
        </div>
      ),
    },
    {
      key: 3,
      comp: (
        <div className="col-lg-6 col-md-12">
          <div className="single-menu-item-three mb-30 wow fadeInUp">
            <div className="thumb">
              <img src="assets/images/menu/thumb-12.png" alt="Menu Image" />
            </div>
            <div className="text">
              <h3 className="item-title-price">
                <Link legacyBehavior href="/menu-fastfood">
                  <a className="item-title">Boston Lobster</a>
                </Link>
                <span className="dot-border" />
                <span className="price">$34</span>
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
      ),
    },
    {
      key: 4,
      comp: (
        <div className="col-lg-6 col-md-12">
          <div className="single-menu-item-three mb-30 wow fadeInUp">
            <div className="thumb">
              <img src="assets/images/menu/thumb-13.png" alt="Menu Image" />
            </div>
            <div className="text">
              <h3 className="item-title-price">
                <Link legacyBehavior href="/menu-fastfood">
                  <a className="item-title">Flat-lay Delicious</a>
                </Link>
                <span className="dot-border" />
                <span className="price">$49</span>
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
      ),
    },
    {
      key: 5,
      comp: (
        <div className="col-lg-6 col-md-12">
          <div className="single-menu-item-three mb-30 wow fadeInUp">
            <div className="thumb">
              <img src="assets/images/menu/thumb-14.png" alt="Menu Image" />
            </div>
            <div className="text">
              <h3 className="item-title-price">
                <Link legacyBehavior href="/menu-fastfood">
                  <a className="item-title">Shrimp Food Prawns</a>
                </Link>
                <span className="dot-border" />
                <span className="price">$73</span>
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
      ),
    },
    {
      key: 6,
      comp: (
        <div className="col-lg-6 col-md-12">
          <div className="single-menu-item-three mb-30 wow fadeInUp">
            <div className="thumb">
              <img src="assets/images/menu/thumb-15.png" alt="Menu Image" />
            </div>
            <div className="text">
              <h3 className="item-title-price">
                <Link legacyBehavior href="/menu-fastfood">
                  <a className="item-title">Steamed Crabs Dish</a>
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
        </div>
      ),
    },
    {
      key: 7,
      comp: (
        <div className="col-lg-6 col-md-12">
          <div className="single-menu-item-three mb-30 wow fadeInUp">
            <div className="thumb">
              <img src="assets/images/menu/thumb-16.png" alt="Menu Image" />
            </div>
            <div className="text">
              <h3 className="item-title-price">
                <Link legacyBehavior href="/menu-fastfood">
                  <a className="item-title">Steamed Crabs</a>
                </Link>
                <span className="dot-border" />
                <span className="price">$73</span>
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
      ),
    },
    {
      key: 8,
      comp: (
        <div className="col-lg-6 col-md-12">
          <div className="single-menu-item-three mb-30 wow fadeInUp">
            <div className="thumb">
              <img src="assets/images/menu/thumb-12.png" alt="Menu Image" />
            </div>
            <div className="text">
              <h3 className="item-title-price">
                <Link legacyBehavior href="/menu-fastfood">
                  <a className="item-title">Boston Lobster</a>
                </Link>
                <span className="dot-border" />
                <span className="price">$34</span>
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
      ),
    },
  ];

  return (
    <Layout>
      <PageBanner
        pageName={"Menu"}
        title="Our Menu"
        subTitle={
          "Explore a symphony of flavors crafted to delight every palate"
        }
      />
      <section className="menu-section pt-120 pb-95">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-12">
              <div className="section-title text-center mb-60 wow fadeInUp">
                <span className="sub-title">Best food menu</span>
                <h2>Our Popular Food Menus</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {popularMenu.map((menu) => {
              return menu.comp;
            })}
          </div>
        </div>
      </section>
      {/*====== End Menu Section ======*/}
      {/*====== Start Menu Section ======*/}
      <section className="menu-section">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-12">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">Best food menu</span>
                <h2>Choose Your Best Menus</h2>
              </div>
            </div>
          </div>
          <MenuSliderOne />
        </div>
      </section>
      {/*====== End Menu Section ======*/}
      {/*=== Start Instagram Section ===*/}
      <section className="instagram-gallery pt-130 pb-100">
        <GalleryImages />
      </section>
      {/*=== End Instagram Section ===*/}

      <Partners />
    </Layout>
  );
};
export default MenuSeaFood;
