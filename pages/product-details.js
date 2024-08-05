import Link from "next/link";
import { useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import PageBanner from "../src/components/PageBanner";
import Partners from "../src/components/Partners";
import ProductDetailsSlider from "../src/components/slider/ProductDetailsSlider";
import Layout from "../src/layout/Layout";
import { recentProductSlider } from "../src/sliderProps";
const ProductsDetails = () => {
  const [cartValue, setCartValue] = useState(1);
  const plus = () => setCartValue(cartValue + 1),
    minus = () =>
      cartValue == 1 ? setCartValue(1) : setCartValue(cartValue - 1);
  return (
    <Layout>
      <PageBanner pageName={"Product Details"} title="product name" />
      <section className="products-details-section pt-125 pb-75">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4">
              <div className="products-sidebar-area">
                {/*=== Product Search Widget ===*/}
                <div className="sidebar-widget product-search-widget mb-45">
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
                <div className="sidebar-widget product-category-widget mb-40">
                  <h4 className="widget-title">Categories</h4>
                  <ul className="category-nav">
                    <li>
                      <a href="#">
                        Vegetable Hamburger
                        <span className="dot-border" />
                        <span className="number">08</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Italian Pizza
                        <span className="dot-border" />
                        <span className="number">03</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Sandwich
                        <span className="dot-border" />
                        <span className="number">15</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Chicken Roll
                        <span className="dot-border" />
                        <span className="number">12</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Soup
                        <span className="dot-border" />
                        <span className="number">12</span>
                      </a>
                    </li>
                  </ul>
                </div>
                {/*=== Price Range Widget ===*/}
                <div className="sidebar-widget price-range-widget mb-35 wow fadeInUp">
                  <h4 className="widget-title">Price</h4>
                  <div id="slider-range" />
                  <div className="price-number">
                    <span className="amount">
                      Price <input type="text" id="amount" />
                    </span>
                  </div>
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
                {/*=== Product Tag Widget ===*/}
                <div className="sidebar-widget product-tag-cloud mb-45 wow fadeInUp">
                  <h4 className="widget-title">
                    Popular Tags <span className="line" />
                  </h4>
                  <a href="#">Restaurant</a>
                  <a href="#">Seafoods</a>
                  <a href="#">Burger</a>
                  <a href="#">Pizza</a>
                  <a href="#">Soup</a>
                  <a href="#">Crap</a>
                  <a href="#">Juice</a>
                  <a href="#">Bread</a>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="product-details-wrapper mb-45">
                <div className="product-info-wrapper pb-45">
                  <div className="row">
                    <div className="col-xl-5">
                      {/*=== Product Gallery ===*/}
                      <ProductDetailsSlider />
                    </div>
                    <div className="col-xl-7">
                      {/*=== Product Info ===*/}
                      <div className="product-info pl-lg-70 mb-50 wow fadeInRight">
                        <h3 className="title">Italian FastFoods</h3>
                        <span className="price">
                          <span className="curreny">$</span>59.56
                        </span>
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
                              <a href="#">4.9(Customer Reivews)</a>
                            </span>
                          </li>
                        </ul>
                        <p>
                          Quis ipsum sed et proin sit aliquet in quis. Aliqu
                          ullamcorper sollicitudin quis ut sedorbi dui porttitor
                          duis porttitore fringilla. Estauris purus vita
                          volutpat. Estorem felis mau libero nisi. Rhoncus
                          phasellus facilisi praesent enim quis venenatis neque
                          metus sit.
                        </p>
                        <div className="product-cart mb-20">
                          <ul>
                            <li>
                              <div className="nice-number">
                                <button type="button" onClick={() => minus()}>
                                  <i className="far fa-minus" />
                                </button>
                                <input
                                  type="number"
                                  defaultValue={1}
                                  data-nice-number-initialized="true"
                                  style={{ width: "2ch" }}
                                  value={cartValue}
                                  onChange={(e) => setCartValue(e.target.value)}
                                />
                                <button type="button" onClick={() => plus()}>
                                  <i className="far fa-plus" />
                                </button>
                              </div>
                            </li>
                            <li>
                              <a href="#" className="main-btn btn-red">
                                Add to cart
                                <i className="far fa-arrow-right" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <ul className="product-meta mb-20">
                          <li>
                            <span>Categories :</span>
                            <a href="#">Restaurant</a>
                          </li>
                          <li>
                            <span>Tags :</span>
                            <a href="#">Pizza, Burger, Soup</a>
                          </li>
                        </ul>
                        <ul className="social-link">
                          <li>
                            <span>Share</span>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-linkedin" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/*=== Description Area ===*/}
                <Tab.Container
                  defaultActiveKey={"descrptions"}
                  className="description-area pb-40 wow fadeInUp"
                >
                  <div className="description-tabs mb-30">
                    <Nav as={"ul"} className="nav">
                      <Nav.Item as={"li"} className="nav-item">
                        <Nav.Link
                          as={"a"}
                          className="nav-link c-pointer"
                          data-bs-toggle="tab"
                          eventKey="descrptions"
                        >
                          Descriptions
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as={"li"} className="nav-item">
                        <Nav.Link
                          as={"a"}
                          className="nav-link c-pointer"
                          data-bs-toggle="tab"
                          eventKey="information"
                        >
                          Information
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as={"li"} className="nav-item">
                        <Nav.Link
                          as={"a"}
                          className="nav-link c-pointer"
                          data-bs-toggle="tab"
                          eventKey="reviews"
                        >
                          Review (2)
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                  <Tab.Content className="tab-content">
                    <Tab.Pane className="tab-pane fade" eventKey="descrptions">
                      <div className="content-box-gap">
                        <p>
                          Sorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Tortor nulla id sit neque scelerisque pulvinar.
                          Mus amet interdum turpis consequat adipiscing.
                          Elementum feugiat sed duis consectetur varius et cras
                          mattis. Lobortis auctor sit in eu nisl fusce augue
                          venenatis, dui. Phasellus eget sagittis mauris, nibh
                          augue cursus pellentesque amet elementum. Tristique
                          amet sollicitudin sit nulla aliquam, imperdiet sed ut
                          diam. Suspendisse ipsum rhoncus nulla lectus. Id neque
                          in urna neque non amet. Tortor sed aliquam in faucibus
                          enim, posuere. Sed et accumsan, neque posuere tempus
                          in cras. Ornare lectus pretium, est eget purus, enim
                          quam purus netus. Turpis nunc
                        </p>
                        <p>
                          Dictum ultrices et suspendisse amet mattis in
                          pellentesque. Vulputate arcu, consectetur odio donec
                          nec duis ultrices facilisi. Mauris cursus elit diam,
                          urna suspendisse et, amet. Vitae ligula ultrices nulla
                          justo, enim lorem duis. Volutpat sit et neque,
                          aliquam, diam at at neque. Lacus augue
                        </p>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane className="tab-pane fade" eventKey="information">
                      <div className="content-box-gap">
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore verit
                          atis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt. Neque porro quisquam est, qui dolorem
                          ipsum quia dolor sit amet, consectetur, adipisci velit
                          sed quia non numquam eius modi tempora incidunt ut
                          labore et dolore magnam aliquam quaerat voluptatem. Ut
                          enim ad minima veniam, quis nostrum exercitationem
                          ullam corporis suscipit laboriosam, nisi ut aliquid ex
                          ea commodi consequatur? Quis autem vel eum iure
                          reprehenderit qui in ea voluptate velit esse quam
                          nihil molestiae consequatur, vel illum qui dolorem eum
                        </p>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
                {/*=== Review Form ===*/}
                <div className="review-form-area wow fadeInUp">
                  <h3 className="title">Leave Your Reviews</h3>
                  <p>
                    We have 3k+ 5star Reviews{" "}
                    <img src="assets/images/product/rate.png" alt="" />
                  </p>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="review-form"
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Full Name"
                            name="name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Email Address"
                            name="email"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <input
                            type="url"
                            className="form_control"
                            placeholder="Website"
                            name="website"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <textarea
                            name="message"
                            className="form_control"
                            placeholder="Write Message"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <button className="main-btn btn-red">
                            Write Message
                            <i className="far fa-arrow-right" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Products Details Section ======*/}
      {/*====== Start Products Section ======*/}
      <section className="recent-products-section pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div className="section-title text-center mb-50">
                <h2>Related Products</h2>
              </div>
            </div>
          </div>
          <Slider
            {...recentProductSlider}
            className="recent-product-slider wow fadeInUp"
          >
            <div className="single-product-item text-center mb-30">
              <div className="product-thumbnail">
                <img
                  src="assets/images/product/product-1.png"
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
                  <Link legacyBehavior href="/product-details">
                    <a>Delicious Vegetables Italian Pizza</a>
                  </Link>
                </h3>
                <span className="price">
                  <span className="curreny">$</span>253.59
                </span>
              </div>
            </div>
            <div className="single-product-item text-center mb-30">
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
            <div className="single-product-item text-center mb-30">
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
            <div className="single-product-item text-center mb-30">
              <div className="product-thumbnail">
                <img
                  src="assets/images/product/product-4.png"
                  alt="Product Image"
                />
                <span className="discount">15% Off</span>
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
            <div className="single-product-item text-center mb-30">
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
          </Slider>
        </div>
      </section>
      <Partners />
    </Layout>
  );
};
export default ProductsDetails;
