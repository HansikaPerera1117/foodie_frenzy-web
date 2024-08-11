import Link from "next/link";

import { useEffect, useState } from "react";
const GalleryImages = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    setGallery([
      {
        id: 1,
        component: (
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            {/*=== Instagram Box ===*/}
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
        ),
      },
      {
        id: 2,
        component: (
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            {/*=== Instagram Box ===*/}
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
        ),
      },
      {
        id: 3,
        component: (
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            {/*=== Instagram Box ===*/}
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
        ),
      },
      {
        id: 4,
        component: (
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            {/*=== Instagram Box ===*/}
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
        ),
      },
      {
        id: 5,
        component: (
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            {/*=== Instagram Box ===*/}
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
        ),
      },
      {
        id: 6,
        component: (
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            {/*=== Instagram Box ===*/}
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
        ),
      },
      {
        id: 7,
        component: (
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            {/*=== Instagram Box ===*/}
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
        ),
      },
      {
        id: 8,
        component: (
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            {/*=== Instagram Box ===*/}
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
        ),
      },
      {
        id: 9,
        component: (
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            {/*=== Instagram Box ===*/}
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
        ),
      },
      {
        id: 10,
        component: (
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            {/*=== Instagram Box ===*/}
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
        ),
      },
      {
        id: 11,
        component: (
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            {/*=== Instagram Box ===*/}
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
        ),
      },
      {
        id: 12,
        component: (
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            {/*=== Instagram Box ===*/}
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
        ),
      },
    ]);
  }, []);
  
  return (
    <div className="container-fluid">
      <div className="row">
        {gallery.map((image) => {
          return image?.component;
        })}
      </div>
    </div>
  );
};
export default GalleryImages;
