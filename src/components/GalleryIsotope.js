import { Fragment, useEffect, useRef, useState } from "react";
const GalleryIsotope = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    setGallery([
      {
        id: 1,
        component: (
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-1">
            <div className="gallery-item-two mb-35 wow fadeInUp">
              <div className="gallery-img">
                <img
                  src="assets/images/gallery/gallery-5.jpg"
                  alt="Gallery Image"
                />
                <div className="hover-overlay">
                  <a
                    href="assets/images/gallery/gallery-5.jpg"
                    className="icon-btn"
                  >
                    <i class="far fa-image" />
                  </a>
                </div>
              </div>
              <div className="gallery-content text-center">
                <h3 className="title">Hamburger</h3>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 2,
        component: (
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-2">
            <div className="gallery-item-two mb-35 wow fadeInUp">
              <div className="gallery-img">
                <img
                  src="assets/images/gallery/gallery-6.jpg"
                  alt="Gallery Image"
                />
                <div className="hover-overlay">
                  <a
                    href="assets/images/gallery/gallery-6.jpg"
                    className="icon-btn"
                  >
                    <i class="far fa-image" />
                  </a>
                </div>
              </div>
              <div className="gallery-content text-center">
                <h3 className="title">Pizza</h3>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 3,
        component: (
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-3">
            <div className="gallery-item-two mb-35 wow fadeInUp">
              <div className="gallery-img">
                <img
                  src="assets/images/gallery/gallery-7.jpg"
                  alt="Gallery Image"
                />
                <div className="hover-overlay">
                  <a
                    href="assets/images/gallery/gallery-7.jpg"
                    className="icon-btn"
                  >
                    <i class="far fa-image" />
                  </a>
                </div>
              </div>
              <div className="gallery-content text-center">
                <h3 className="title">Vegetable Roll</h3>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 4,
        component: (
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-4">
            <div className="gallery-item-two mb-35 wow fadeInUp">
              <div className="gallery-img">
                <img
                  src="assets/images/gallery/gallery-8.jpg"
                  alt="Gallery Image"
                />
                <div className="hover-overlay">
                  <a
                    href="assets/images/gallery/gallery-8.jpg"
                    className="icon-btn"
                  >
                    <i class="far fa-image" />
                  </a>
                </div>
              </div>
              <div className="gallery-content text-center">
                <h3 className="title">Organic Juice</h3>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 5,
        component: (
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-5 cat-1">
            <div className="gallery-item-two mb-35 wow fadeInUp">
              <div className="gallery-img">
                <img
                  src="assets/images/gallery/gallery-9.jpg"
                  alt="Gallery Image"
                />
                <div className="hover-overlay">
                  <a
                    href="assets/images/gallery/gallery-9.jpg"
                    className="icon-btn"
                  >
                    <i class="far fa-image" />
                  </a>
                </div>
              </div>
              <div className="gallery-content text-center">
                <h3 className="title">Sandwich</h3>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 6,
        component: (
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-2">
            <div className="gallery-item-two mb-35 wow fadeInUp">
              <div className="gallery-img">
                <img
                  src="assets/images/gallery/gallery-10.jpg"
                  alt="Gallery Image"
                />
                <div className="hover-overlay">
                  <a
                    href="assets/images/gallery/gallery-10.jpg"
                    className="icon-btn"
                  >
                    <i class="far fa-image" />
                  </a>
                </div>
              </div>
              <div className="gallery-content text-center">
                <h3 className="title">Soup</h3>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 7,
        component: (
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-1 cat-3">
            <div className="gallery-item-two mb-35 wow fadeInUp">
              <div className="gallery-img">
                <img
                  src="assets/images/gallery/gallery-11.jpg"
                  alt="Gallery Image"
                />
                <div className="hover-overlay">
                  <a
                    href="assets/images/gallery/gallery-11.jpg"
                    className="icon-btn"
                  >
                    <i class="far fa-image" />
                  </a>
                </div>
              </div>
              <div className="gallery-content text-center">
                <h3 className="title">Hot Dogs</h3>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 8,
        component: (
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-5">
            <div className="gallery-item-two mb-35 wow fadeInUp">
              <div className="gallery-img">
                <img
                  src="assets/images/gallery/gallery-12.jpg"
                  alt="Gallery Image"
                />
                <div className="hover-overlay">
                  <a href="#" className="icon-btn">
                    <i class="far fa-image" />
                  </a>
                </div>
              </div>
              <div className="gallery-content text-center">
                <h3 className="title">Sandwich</h3>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 9,
        component: (
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-3 cat-4">
            <div className="gallery-item-two mb-35 wow fadeInUp">
              <div className="gallery-img">
                <img
                  src="assets/images/gallery/gallery-13.jpg"
                  alt="Gallery Image"
                />
                <div className="hover-overlay">
                  <a href="#" className="icon-btn">
                    <i class="far fa-image" />
                  </a>
                </div>
              </div>
              <div className="gallery-content text-center">
                <h3 className="title">Pizza</h3>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 10,
        component: (
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-5 cat-2">
            <div className="gallery-item-two mb-35 wow fadeInUp">
              <div className="gallery-img">
                <img
                  src="assets/images/gallery/gallery-14.jpg"
                  alt="Gallery Image"
                />
                <div className="hover-overlay">
                  <a href="#" className="icon-btn">
                    <i class="far fa-image" />
                  </a>
                </div>
              </div>
              <div className="gallery-content text-center">
                <h3 className="title">Hamburger</h3>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 11,
        component: (
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-3 cat-4">
            <div className="gallery-item-two mb-35 wow fadeInUp">
              <div className="gallery-img">
                <img
                  src="assets/images/gallery/gallery-15.jpg"
                  alt="Gallery Image"
                />
                <div className="hover-overlay">
                  <a href="#" className="icon-btn">
                    <i class="far fa-image" />
                  </a>
                </div>
              </div>
              <div className="gallery-content text-center">
                <h3 className="title">Vegetable Soup</h3>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 12,
        component: (
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-1">
            <div className="gallery-item-two mb-35 wow fadeInUp">
              <div className="gallery-img">
                <img
                  src="assets/images/gallery/gallery-16.jpg"
                  alt="Gallery Image"
                />
                <div className="hover-overlay">
                  <a href="#" className="icon-btn">
                    <i class="far fa-image" />
                  </a>
                </div>
              </div>
              <div className="gallery-content text-center">
                <h3 className="title">Fish Fry</h3>
              </div>
            </div>
          </div>
        ),
      },
    ]);
  }, []);

  return (
    <Fragment>
      <div className="row gallery-row">
        {gallery.map((image) => {
          return image?.component;
        })}
      </div>
    </Fragment>
  );
};
export default GalleryIsotope;
