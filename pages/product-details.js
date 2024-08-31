"use client";
import React, { useEffect, useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import PageBanner from "../src/components/PageBanner";
import Partners from "../src/components/Partners";
import ProductDetailsSlider from "../src/components/slider/ProductDetailsSlider";
import Layout from "../src/layout/Layout";
import { getProductById } from "../src/service/productService";
import MenuSliderOne from "../src/components/slider/MenuSliderOne";
import { useSearchParams } from "next/navigation";
import { handleError } from "../src/util/CommonFun";
import parse from "html-react-parser";
import TestimonialSliderThree from "../src/components/slider/TestimonialSliderThree";

const ProductsDetails = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [productId, setProductId] = useState("");
  const [productDetails, setProductDetails] = useState([]);
  const [cartAddedBtn, setCartAddedBtn] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);

  const [cartValue, setCartValue] = useState(1);
  const plus = () => setCartValue(cartValue + 1),
    minus = () =>
      cartValue == 1 ? setCartValue(1) : setCartValue(cartValue - 1);

  useEffect(() => {
    document.title = "Product Details | Foodie Frenzy Restaurant";
    setCartTotal(
      localStorage.getItem("CART_LIST")
        ? JSON.parse(localStorage.getItem("CART_LIST")).length
        : 0
    );
  }, []);

  useEffect(() => {
    if (id) {
      console.log("Product ID:", id);
      setProductId(id);
      getProductDetails(id);
      setCartAddedBtn(false);
    }
  }, [id]);

  useEffect(() => {
    const cartNumberEl = document.querySelector(".cart-number");
    cartNumberEl.innerHTML = cartTotal;
  }, [cartTotal]);

  const getProductDetails = (productId) => {
    setProductDetails([]);
    // popUploader(dispatch, true);
    getProductById(productId)
      .then((res) => {
        setProductDetails(res?.data);
        // setCurrentPage(res?.data?.currentPage);
        // setTotalRecodes(res?.data?.totalCount);
        // popUploader(dispatch, false);
      })
      .catch((c) => {
        // popUploader(dispatch, false);
        handleError(c);
      });
  };

  const addToCart = () => {
    let details = localStorage.getItem("CART_LIST")
      ? JSON.parse(localStorage.getItem("CART_LIST"))
      : [];

    const fileUrl =
      productDetails?.productFile?.length > 0
        ? productDetails.productFile.find((img) => img.isDefault)?.file
            .originalPath
        : null;

    let productObject = {
      id: productDetails?.id,
      name: productDetails?.name,
      status: productDetails?.status,
      price: productDetails?.price,
      filesUrl: fileUrl,
      description: productDetails?.description,
      category: {
        id: productDetails?.category?.id,
        name: productDetails?.category?.name,
      },
      qty: cartValue,
      total: productDetails?.price * cartValue,
    };

    console.log(productObject);

    details.push(productObject);

    localStorage.setItem("CART_LIST", JSON.stringify(details));

    setCartTotal(cartTotal + cartValue);

    setCartAddedBtn(true);
  };

  return (
    <Layout>
      
      <PageBanner
        pageName={productDetails?.name}
        title={productDetails?.name}
      />
      <section className="products-details-section pt-125 pb-75">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="product-details-wrapper mb-45">
                <div className="product-info-wrapper pb-45">
                  <div className="row">
                    <div className="col-xl-5">
                      {/*=== Product Gallery ===*/}
                      <ProductDetailsSlider
                        productImages={productDetails?.productFile}
                      />
                    </div>
                    <div className="col-xl-7">
                      {/*=== Product Info ===*/}
                      <div className="product-info pl-lg-70 mb-50 wow fadeInRight">
                        <h3 className="title">{productDetails?.name}</h3>
                        <span className="price">
                          <span className="curreny">LKR</span>
                          {" " + productDetails?.price}
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
                          {parse(
                            productDetails?.description
                              ? productDetails?.description
                              : ""
                          )}
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
                              {cartAddedBtn ? (
                                <button
                                  className="main-btn btn-black"
                                  disabled={true}
                                >
                                  Added
                                  <i className="far fa-arrow-right" />
                                </button>
                              ) : (
                                <button
                                  className="main-btn btn-red"
                                  onClick={() => {
                                    addToCart();
                                  }}
                                >
                                  Add to cart
                                  <i className="far fa-arrow-right" />
                                </button>
                              )}
                            </li>
                          </ul>
                        </div>
                        <ul className="product-meta mb-20">
                          <li>
                            <span>
                              Categories : {productDetails?.category?.name}
                            </span>
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
                        <div className="row mt-5">
                          <div className="col-lg-12">
                            <div className="product-info">
                              <h4
                                className="price my-3"
                                style={{ color: "#df3f00" }}
                              >
                                Step 01
                              </h4>
                              <h4 className="sb-mb-15">
                                Add to the cart and place an order
                              </h4>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="product-info">
                              <h4
                                className=" my-3"
                                style={{ color: "#df3f00" }}
                              >
                                Step 02
                              </h4>
                              <h4 className="sb-mb-15">
                                Enter your order details
                              </h4>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="product-info">
                              <h4
                                className="price my-3"
                                style={{ color: "#df3f00" }}
                              >
                                Step 03
                              </h4>
                              <h4 className="sb-mb-15">
                                Enjoy your favorite food at home!
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Description Area ===*/}
            <Tab.Container
              defaultActiveKey={"reviews"}
              className="description-area pb-40 wow fadeInUp"
            >
              <div className="description-tabs mb-30">
                <Nav as={"ul"} className="nav">
                  <Nav.Item as={"li"} className="nav-item">
                    <Nav.Link
                      as={"a"}
                      className="nav-link c-pointer"
                      data-bs-toggle="tab"
                      eventKey="reviews"
                    >
                      Review
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as={"li"} className="nav-item">
                    <Nav.Link
                      as={"a"}
                      className="nav-link c-pointer"
                      data-bs-toggle="tab"
                      eventKey="descrptions"
                    >
                      Category Details
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
              <Tab.Content className="tab-content">
                <Tab.Pane className="tab-pane fade" eventKey="descrptions">
                  <div className="content-box-gap">
                    <p>
                      {parse(
                        productDetails?.category?.description
                          ? productDetails?.category?.description
                          : ""
                      )}
                    </p>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="tab-pane fade" eventKey="reviews">
                  <div className="container">
                    <TestimonialSliderThree />
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </section>
      {/*====== End Products Details Section ======*/}
      {/*====== Start Products Section ======*/}
      <section className="menu-section pb-100">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div className="section-title text-center mb-50">
                <h2>Related Products</h2>
              </div>
            </div>
          </div>
          <MenuSliderOne />
        </div>
      </section>
      <Partners />
    </Layout>
  );
};
export default ProductsDetails;
