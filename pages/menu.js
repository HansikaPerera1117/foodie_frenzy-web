import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Partners from "../src/components/Partners";
import MenuSliderOne from "../src/components/slider/MenuSliderOne";
import Layout from "../src/layout/Layout";
import GalleryImages from "../src/components/slider/GalleryImages";
import React, { useEffect, useState } from "react";
import { getAllProducts } from "../src/service/productService";
import { handleError, truncateDescription } from "../src/util/CommonFun";
import parse from "html-react-parser";
const MenuSeaFood = () => {
  useEffect(() => {
    document.title = "Our Menu | Foodie Frenzy Restaurant";
  }, []);

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    loadAllProducts();
  }, []);

  const loadAllProducts = () => {
    setProductList([]);
    // popUploader(dispatch, true);
    let temp = [];
    getAllProducts()
      .then((res) => {
        res.data?.records.map((product, index) => {
          if (product?.status === 1) {
            temp.push({
              id: product?.id,
              name: product?.name,
              status: product?.status,
              price: product?.price,
              files: product?.productFile,
              description: product?.description,
              category: product?.category,
            });
          }
        });
        setProductList(temp);
        // setCurrentPage(res?.data?.currentPage);
        // setTotalRecodes(res?.data?.totalCount);
        // popUploader(dispatch, false);
      })
      .catch((c) => {
        // popUploader(dispatch, false);
        handleError(c);
      });
  };

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
            {productList.map((menu) => {
              return (
                <div className="col-lg-6 col-md-12">
                  <div className="single-menu-item-three mb-30 wow fadeInUp">
                    <div className="thumb">
                      {menu?.files && menu.files.length > 0 ? (
                        menu.files.map((img, index) => {
                          if (img?.isDeafult) {
                            return (
                              <img
                                src={img?.originalPath}
                                alt={menu.name}
                                className="rounded"
                                onError={(e) =>
                                  (e.target.src =
                                    "https://i.ibb.co/qpB9ZCZ/placeholder.png")
                                }
                              />
                            );
                          }
                        })
                      ) : (
                        <img
                          src="https://i.ibb.co/qpB9ZCZ/placeholder.png"
                          className="rounded"
                          alt="placeholder"
                        />
                      )}
                    </div>
                    <div className="text">
                      <h3 className="item-title-price">
                        <Link legacyBehavior href="/product-details">
                          <a className="item-title">{menu?.name}</a>
                        </Link>
                        <span className="dot-border" />
                        <span className="price">LKR {menu?.price}</span>
                      </h3>
                      <p>{parse(truncateDescription(menu?.description, 20))}</p>
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
              );
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
