import Isotope from "isotope-layout";
import { Fragment, useEffect, useRef, useState } from "react";
const GalleryIsotope = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery-row", {
        itemSelector: ".gallery-column",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".gallery-column",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <Fragment>
      <div className="row">
        <div className="col-lg-12">
          <div className="gallery-filter-button text-center mb-60 wow fadeInDown">
            <ul className="filter-btn">
              <li
                className={`c-pointer ${activeBtn("*")}`}
                onClick={handleFilterKeyChange("*")}
                data-filter="*"
              >
                Show All
              </li>
              <li
                data-filter=".cat-1"
                className={`c-pointer ${activeBtn("cat-1")}`}
                onClick={handleFilterKeyChange("cat-1")}
              >
                Fastfood
              </li>
              <li
                data-filter=".cat-2"
                className={`c-pointer ${activeBtn("cat-2")}`}
                onClick={handleFilterKeyChange("cat-2")}
              >
                Seafoods
              </li>
              <li
                data-filter=".cat-3"
                className={`c-pointer ${activeBtn("cat-3")}`}
                onClick={handleFilterKeyChange("cat-3")}
              >
                Drink &amp; Juice
              </li>
              <li
                data-filter=".cat-4"
                className={`c-pointer ${activeBtn("cat-4")}`}
                onClick={handleFilterKeyChange("cat-4")}
              >
                Coffee
              </li>
              <li
                data-filter=".cat-5"
                className={`c-pointer ${activeBtn("cat-5")}`}
                onClick={handleFilterKeyChange("cat-5")}
              >
                Chinese
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row gallery-row">
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-1">
          <div className="gallery-item-two mb-35 wow fadeInUp">
            <div className="gallery-img">
              <img
                src="assets/images/gallery/gallery-5.jpg"
                alt="Gallery Image"
              />
              <div className="hover-overlay">
                <a href="#" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="gallery-content text-center">
              <h3 className="title">Hamburger</h3>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-2">
          <div className="gallery-item-two mb-35 wow fadeInUp">
            <div className="gallery-img">
              <img
                src="assets/images/gallery/gallery-6.jpg"
                alt="Gallery Image"
              />
              <div className="hover-overlay">
                <a href="#" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="gallery-content text-center">
              <h3 className="title">Pizza</h3>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-3">
          <div className="gallery-item-two mb-35 wow fadeInUp">
            <div className="gallery-img">
              <img
                src="assets/images/gallery/gallery-7.jpg"
                alt="Gallery Image"
              />
              <div className="hover-overlay">
                <a href="#" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="gallery-content text-center">
              <h3 className="title">Vegetable Roll</h3>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-4">
          <div className="gallery-item-two mb-35 wow fadeInUp">
            <div className="gallery-img">
              <img
                src="assets/images/gallery/gallery-8.jpg"
                alt="Gallery Image"
              />
              <div className="hover-overlay">
                <a href="#" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="gallery-content text-center">
              <h3 className="title">Organic Juice</h3>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-5 cat-1">
          <div className="gallery-item-two mb-35 wow fadeInUp">
            <div className="gallery-img">
              <img
                src="assets/images/gallery/gallery-9.jpg"
                alt="Gallery Image"
              />
              <div className="hover-overlay">
                <a href="#" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="gallery-content text-center">
              <h3 className="title">Sandwich</h3>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-2">
          <div className="gallery-item-two mb-35 wow fadeInUp">
            <div className="gallery-img">
              <img
                src="assets/images/gallery/gallery-10.jpg"
                alt="Gallery Image"
              />
              <div className="hover-overlay">
                <a href="#" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="gallery-content text-center">
              <h3 className="title">Soup</h3>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-1 cat-3">
          <div className="gallery-item-two mb-35 wow fadeInUp">
            <div className="gallery-img">
              <img
                src="assets/images/gallery/gallery-11.jpg"
                alt="Gallery Image"
              />
              <div className="hover-overlay">
                <a href="#" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="gallery-content text-center">
              <h3 className="title">Hot Dogs</h3>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-5">
          <div className="gallery-item-two mb-35 wow fadeInUp">
            <div className="gallery-img">
              <img
                src="assets/images/gallery/gallery-12.jpg"
                alt="Gallery Image"
              />
              <div className="hover-overlay">
                <a href="#" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="gallery-content text-center">
              <h3 className="title">Sandwich</h3>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-3 cat-4">
          <div className="gallery-item-two mb-35 wow fadeInUp">
            <div className="gallery-img">
              <img
                src="assets/images/gallery/gallery-13.jpg"
                alt="Gallery Image"
              />
              <div className="hover-overlay">
                <a href="#" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="gallery-content text-center">
              <h3 className="title">Pizza</h3>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-5 cat-2">
          <div className="gallery-item-two mb-35 wow fadeInUp">
            <div className="gallery-img">
              <img
                src="assets/images/gallery/gallery-14.jpg"
                alt="Gallery Image"
              />
              <div className="hover-overlay">
                <a href="#" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="gallery-content text-center">
              <h3 className="title">Hamburger</h3>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-3 cat-4">
          <div className="gallery-item-two mb-35 wow fadeInUp">
            <div className="gallery-img">
              <img
                src="assets/images/gallery/gallery-15.jpg"
                alt="Gallery Image"
              />
              <div className="hover-overlay">
                <a href="#" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="gallery-content text-center">
              <h3 className="title">Vegetable Soup</h3>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-1">
          <div className="gallery-item-two mb-35 wow fadeInUp">
            <div className="gallery-img">
              <img
                src="assets/images/gallery/gallery-16.jpg"
                alt="Gallery Image"
              />
              <div className="hover-overlay">
                <a href="#" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="gallery-content text-center">
              <h3 className="title">Fish Fry</h3>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default GalleryIsotope;
