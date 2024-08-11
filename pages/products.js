import Link from "next/link";
import { useEffect, useState } from "react";
import niceSelect from "react-nice-select";
import PageBanner from "../src/components/PageBanner";
import Partners from "../src/components/Partners";
import PriceRange from "../src/components/PriceRange";
import Layout from "../src/layout/Layout";

const Products = () => {
  const [categories, setCategories] = useState([]);
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    niceSelect();
    setCategories([
      {
        id: 1,
        list: (
          <li>
            <a href="#">
              Vegetable Hamburger
              <span className="dot-border" />
              <span className="number">08</span>
            </a>
          </li>
        ),
      },
      {
        id: 2,
        list: (
          <li>
            <a href="#">
              Italian Pizza
              <span className="dot-border" />
              <span className="number">03</span>
            </a>
          </li>
        ),
      },
      {
        id: 3,
        list: (
          <li>
            <a href="#">
              Sandwich
              <span className="dot-border" />
              <span className="number">15</span>
            </a>
          </li>
        ),
      },
      {
        id: 4,
        list: (
          <li>
            <a href="#">
              Chicken Roll
              <span className="dot-border" />
              <span className="number">12</span>
            </a>
          </li>
        ),
      },
      {
        id: 5,
        list: (
          <li>
            <a href="#">
              Soup
              <span className="dot-border" />
              <span className="number">12</span>
            </a>
          </li>
        ),
      },
    ]);
    setProductList([
      {
        id: 1,
        product: (
          <div className="col-xxl-4 col-md-6 col-sm-6">
            <div className="single-product-item text-center wow fadeInUp mb-30">
              <div className="product-thumbnail">
                <img
                  src="assets/images/product/product-1.png"
                  alt="Product Image"
                />
              </div>
              <div className="product-info">
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
                </ul>
                <h3 className="title">
                  <Link legacyBehavior href="product-details">
                    Delicious Vegetables Italian Pizza
                  </Link>
                </h3>
                <span className="price">
                  <span className="curreny">$</span>253.59
                </span>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 2,
        product: (
          <div className="col-xxl-4 col-md-6 col-sm-6">
            <div className="single-product-item text-center wow fadeInUp mb-30">
              <div className="product-thumbnail">
                <img
                  src="assets/images/product/product-2.png"
                  alt="Product Image"
                />
                <span className="discount">25% Off</span>
              </div>
              <div className="product-info">
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
                </ul>
                <h3 className="title">
                  <Link legacyBehavior href="product-details">
                    Cheese Burger Onion Tomato Lettuce
                  </Link>
                </h3>
                <span className="price">
                  <span className="curreny">$</span>152.53
                </span>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 3,
        product: (
          <div className="col-xxl-4 col-md-6 col-sm-6">
            <div className="single-product-item text-center wow fadeInUp mb-30">
              <div className="product-thumbnail">
                <img
                  src="assets/images/product/product-3.png"
                  alt="Product Image"
                />
              </div>
              <div className="product-info">
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
                </ul>
                <h3 className="title">
                  <Link legacyBehavior href="product-details">
                    Board Pita Chicken Ingredients
                  </Link>
                </h3>
                <span className="price">
                  <span className="curreny">$</span>85.59
                </span>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 4,
        product: (
          <div className="col-xxl-4 col-md-6 col-sm-6">
            <div className="single-product-item text-center wow fadeInUp mb-30">
              <div className="product-thumbnail">
                <img
                  src="assets/images/product/product-4.png"
                  alt="Product Image"
                />
                <span className="discount">25% Off</span>
              </div>
              <div className="product-info">
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
                </ul>
                <h3 className="title">
                  <Link legacyBehavior href="product-details">
                    Baked Chicken Wings Asian Tomatoes
                  </Link>
                </h3>
                <span className="price">
                  <span className="curreny">$</span>240.59
                </span>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 5,
        product: (
          <div className="col-xxl-4 col-md-6 col-sm-6">
            <div className="single-product-item text-center wow fadeInUp mb-30">
              <div className="product-thumbnail">
                <img
                  src="assets/images/product/product-5.png"
                  alt="Product Image"
                />
              </div>
              <div className="product-info">
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
                </ul>
                <h3 className="title">
                  <Link legacyBehavior href="product-details">
                    Red Alaskan King Sea Crab
                  </Link>
                </h3>
                <span className="price">
                  <span className="curreny">$</span>152.53
                </span>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 6,
        product: (
          <div className="col-xxl-4 col-md-6 col-sm-6">
            <div className="single-product-item text-center wow fadeInUp mb-30">
              <div className="product-thumbnail">
                <img
                  src="assets/images/product/product-6.png"
                  alt="Product Image"
                />
                <span className="discount">Hot Deal</span>
              </div>
              <div className="product-info">
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
                </ul>
                <h3 className="title">
                  <Link legacyBehavior href="product-details">
                    Pizza With Seafood Italian Foods
                  </Link>
                </h3>
                <span className="price">
                  <span className="curreny">$</span>320.59
                </span>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 7,
        product: (
          <div className="col-xxl-4 col-md-6 col-sm-6">
            <div className="single-product-item text-center wow fadeInUp mb-30">
              <div className="product-thumbnail">
                <img
                  src="assets/images/product/product-7.png"
                  alt="Product Image"
                />
                <span className="discount">25% Off</span>
              </div>
              <div className="product-info">
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
                </ul>
                <h3 className="title">
                  <Link legacyBehavior href="product-details">
                    Footlong Submarine Sandwich
                  </Link>
                </h3>
                <span className="price">
                  <span className="curreny">$</span>440.59
                </span>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 8,
        product: (
          <div className="col-xxl-4 col-md-6 col-sm-6">
            <div className="single-product-item text-center wow fadeInUp mb-30">
              <div className="product-thumbnail">
                <img
                  src="assets/images/product/product-8.png"
                  alt="Product Image"
                />
              </div>
              <div className="product-info">
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
                </ul>
                <h3 className="title">
                  <Link legacyBehavior href="product-details">
                    Fresh Crab seafood Sauce Crab
                  </Link>
                </h3>
                <span className="price">
                  <span className="curreny">$</span>352.53
                </span>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 9,
        product: (
          <div className="col-xxl-4 col-md-6 col-sm-6">
            <div className="single-product-item text-center wow fadeInUp mb-30">
              <div className="product-thumbnail">
                <img
                  src="assets/images/product/product-9.png"
                  alt="Product Image"
                />
                <span className="discount">25% Off</span>
              </div>
              <div className="product-info">
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
                </ul>
                <h3 className="title">
                  <Link legacyBehavior href="product-details">
                    Chicken Biryani Served Terracotta
                  </Link>
                </h3>
                <span className="price">
                  <span className="curreny">$</span>530.59
                </span>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 10,
        product: (
          <div className="col-xxl-4 col-md-6 col-sm-6">
            <div className="single-product-item text-center wow fadeInUp mb-30">
              <div className="product-thumbnail">
                <img
                  src="assets/images/product/product-6.png"
                  alt="Product Image"
                />
                <span className="discount">Hot Deal</span>
              </div>
              <div className="product-info">
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
                </ul>
                <h3 className="title">
                  <Link legacyBehavior href="product-details">
                    Pizza With Seafood Italian Foods
                  </Link>
                </h3>
                <span className="price">
                  <span className="curreny">$</span>320.59
                </span>
              </div>
            </div>
          </div>
        ),
      },
    ]);
  }, []);

  return (
    <Layout>
      <PageBanner
        pageName={"Our Shop"}
        title="Shop"
        subTitle={
          "Bring a taste of our restaurant to your home with our exclusive products"
        }
      />{" "}
      <section className="product-shop-section pt-130 pb-85">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="products-sidebar-area">
                {/*=== Product Search Widget ===*/}
                <div className="sidebar-widget product-search-widget mb-45 wow fadeInUp">
                  <h4 className="widget-title">Search</h4>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form_group">
                      <label>
                        <i className="fas fa-search" />
                      </label>
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Search"
                        name="search"
                        required=""
                      />
                    </div>
                  </form>
                </div>
                {/*=== Product Category Widget ===*/}
                <div className="sidebar-widget product-category-widget mb-40 wow fadeInUp">
                  <h4 className="widget-title">Categories</h4>
                  <ul className="category-nav">
                    {categories.map((cat) => {
                      return cat?.list;
                    })}
                  </ul>
                </div>
                {/*=== Price Range Widget ===*/}
                <div className="sidebar-widget price-range-widget mb-35 wow fadeInUp">
                  <h4 className="widget-title">Price</h4>
                  <PriceRange />
                </div>
                {/*=== Recent Product Widget ===*/}
                <div className="sidebar-widget recent-products-widget mb-45 wow fadeInUp">
                  <h4 className="widget-title">
                    Products <span className="line" />
                  </h4>
                  <ul className="product-list">
                    <li className="product-item d-flex align-items-center">
                      <div className="thumb">
                        <img src="assets/images/product/thumb-1.jpg" alt="" />
                      </div>
                      <div className="info">
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
                        </ul>
                        <h6>
                          <Link legacyBehavior href="product-details">
                            Vegetable Hamburger
                          </Link>
                        </h6>
                        <span className="price">
                          <span className="curreny">$</span>58.63
                        </span>
                      </div>
                    </li>
                    <li className="product-item d-flex align-items-center">
                      <div className="thumb">
                        <img src="assets/images/product/thumb-2.jpg" alt="" />
                      </div>
                      <div className="info">
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
                        </ul>
                        <h6>
                          <Link legacyBehavior href="product-details">
                            Italian Chicken Pizza
                          </Link>
                        </h6>
                        <span className="price">
                          <span className="curreny">$</span>83.25
                        </span>
                      </div>
                    </li>
                    <li className="product-item d-flex align-items-center">
                      <div className="thumb">
                        <img src="assets/images/product/thumb-3.jpg" alt="" />
                      </div>
                      <div className="info">
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
                        </ul>
                        <h6>
                          <Link legacyBehavior href="product-details">
                            Crab Seafood sauce
                          </Link>
                        </h6>
                        <span className="price">
                          <span className="curreny">$</span>83.25
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="products-wrapper">
                <div className="row">
                  {productList.map((prd) => {
                    return prd?.product;
                  })}
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="show-text mb-15 wow fadeInLeft">
                      <p>Showing 1 - 12 of 30 Results</p>
                    </div>
                    <div className="qichen-pagination text-center wow fadeInUp mt-30 mb-45">
                      <ul>
                        <li>
                          <a href="#" className="prev">
                            <i className="fas fa-arrow-left" />
                          </a>
                        </li>
                        <li>
                          <a href="#">1</a>
                        </li>
                        <li>
                          <a href="#">2</a>
                        </li>
                        <li>
                          <a href="#">3</a>
                        </li>
                        <li>
                          <a href="#">4</a>
                        </li>
                        <li>
                          <a href="#">5</a>
                        </li>
                        <li>
                          <a href="#" className="next">
                            <i className="fas fa-arrow-right" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Partners />
    </Layout>
  );
};
export default Products;
