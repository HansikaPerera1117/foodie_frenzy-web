import Link from "next/link";
import React, { useEffect, useState } from "react";
import niceSelect from "react-nice-select";
import PageBanner from "../src/components/PageBanner";
import Partners from "../src/components/Partners";
import PriceRange from "../src/components/PriceRange";
import Layout from "../src/layout/Layout";
import { getAllCategories } from "../src/service/categoriesService";
import RangeSlider from "../src/components/PriceRange";
import debounce from "lodash.debounce";
import { productsFiltration } from "../src/service/productService";

const Products = () => {
  const [categories, setCategories] = useState([]);
  const [productList, setProductList] = useState([]);
  const [searchProductName, setSearchProductName] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [range, setRange] = useState([0, 0]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  //-------------------------- pagination --------------------------

  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecodes, setTotalRecodes] = useState(0);

  useEffect(() => {
    loadAllCatagories();
    debounceHandleProductFiltration(searchProductName, searchCategory, range);
    niceSelect();
  }, []);

  const loadAllCatagories = () => {
    let temp = [];
    setCategories([]);
    // popUploader(dispatch, true);
    getAllCategories()
      .then(async (resp) => {
        resp?.data?.records.map((category, index) => {
          if (category?.status === 1) {
            temp.push({
              id: category?.id,
              // image:
              //   category?.file && category.file.length > 0
              //     ? category.file.map((img) => {
              //         img?.originalPath;
              //       })
              //     : defaultCategoryImg,
              image:
                category?.file && category.file.length > 0
                  ? category.file[0]?.originalPath // Ensure you're accessing the correct property
                  : null,
              name: category?.name,
              description:
                category?.description != null ? category?.description : "",
              categories_status: category?.status,
            });
          }
        });
        await setCategories(temp);
        console.log(temp);

        // popUploader(dispatch, false);
      })
      .catch((err) => {
        // popUploader(dispatch, false);
        handleError(err);
      });
  };

  const handleChangePrice = (value) => {
    const sanitizedValue = value.map((v) => (isNaN(v) ? 0 : v));
    setRange(sanitizedValue);
    setMinPrice(sanitizedValue[0]);
    setMaxPrice(sanitizedValue[1]);
    debounceHandleProductFiltration(
      searchProductName,
      searchCategory,
      sanitizedValue
    );
  };

  const handleProductFiltration = (
    productName,
    category,
    range,
    currentPage
  ) => {
    let max = "";
    let min = "";

    if (range[0] === 0 && range[1] === 0) {
      max = "";
      min = "";
    } else {
      min = range[0];
      max = range[1];
    }

    setProductList([]);
    // popUploader(dispatch, true);

    let data = {
      name: productName,
      category: category === undefined ? "" : category === null ? "" : category,
      status: "",
      maxPrice: max,
      minPrice: min,
    };
    let temp = [];
    productsFiltration(data, currentPage)
      .then((res) => {
        res.data?.records.map((product, index) => {
          temp.push({
            id: product?.id,
            name: product?.name,
            status: product?.status,
            price: product?.fromPrice,
            files: product?.productFile,
            description: product?.description,
            category: product?.category,
          });
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

  const debounceHandleProductFiltration = React.useCallback(
    debounce(handleProductFiltration, 500),
    []
  );

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
                  <form>
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
                        onChange={(e) => {
                          setSearchProductName(e.target.value);
                          debounceHandleProductFiltration(
                            e.target.value,
                            searchCategory,
                            range
                          );
                        }}
                      />
                    </div>
                  </form>
                </div>
                {/*=== Product Category Widget ===*/}
                <div className="sidebar-widget product-category-widget mb-40 wow fadeInUp">
                  <h4 className="widget-title">Categories</h4>
                  <ul className="category-nav">
                    {categories.map((cat) => {
                      return (
                        <li>
                          <a
                            onClick={(e) => {
                              setSearchCategory(cat?.id);
                              debounceHandleProductFiltration(
                                searchProductName,
                                cat?.id,
                                range
                              );
                            }}
                          >
                            {cat?.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                {/*=== Price Range Widget ===*/}
                <div className="sidebar-widget price-range-widget mb-35 wow fadeInUp">
                  <h4 className="widget-title">Price</h4>
                  <RangeSlider
                    min={0}
                    max={10000}
                    onChange={({ min, max }) =>
                      console.log(`min = ${min}, max = ${max}`)
                    }
                    getValues={(values) => {
                      console.log(values);
                      setMinPrice(parseFloat(values?.minValue));
                      setMaxPrice(parseFloat(values?.maxValue));
                      handleChangePrice([
                        parseFloat(values?.minValue),
                        parseFloat(values?.maxValue),
                      ]);
                    }}
                  />
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
                  {productList.map((product) => {
                    return (
                      <div
                        className="col-xxl-4 col-md-6 col-sm-6"
                        key={product?.id}
                      >
                        {console.log(product)}
                        <div className="single-product-item text-center wow fadeInUp mb-30">
                          <div className="product-thumbnail">
                            {product?.files && product.files.length > 0 ? (
                              product.files.map((img, index) => {
                                if (img?.isDeafult) {
                                  return (
                                    <img
                                      src={img?.originalPath}
                                      alt={product.name}
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
                          <div className="product-info">
                            <ul className="ratings mt-4">
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
                            <span>{product?.category?.name}</span>
                            <h3 className="title">
                              <a legacyBehavior href={"/product-details"}>
                                {product?.name}
                              </a>
                            </h3>
                            <span className="price">
                              <span className="curreny">LKR</span>
                              {product?.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
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
