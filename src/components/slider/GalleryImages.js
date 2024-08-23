import Link from "next/link";
import { useEffect, useState } from "react";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";

const GalleryImages = () => {
  const [gallery, setGallery] = useState([]);
  const [img, setImg] = useState(false);
  const [imgValue, setImgValue] = useState([]);

  useEffect(() => {
    setGallery([
      {
        id: 1,
        src: "assets/images/instagram/insta-1.jpg",
      },
      {
        id: 2,
        src: "assets/images/instagram/insta-2.jpg",
      },
      {
        id: 3,
        src: "assets/images/instagram/insta-3.jpg",
      },
      {
        id: 4,
        src: "assets/images/instagram/insta-4.jpg",
      },
      {
        id: 5,
        src: "assets/images/instagram/insta-5.jpg",
      },
      {
        id: 6,
        src: "assets/images/instagram/insta-6.jpg",
      },
      {
        id: 7,
        src: "assets/images/instagram/insta-7.jpg",
      },
      {
        id: 8,
        src: "assets/images/instagram/insta-8.jpg",
      },
      {
        id: 9,
        src: "assets/images/instagram/insta-9.jpg",
      },
      {
        id: 10,
        src: "assets/images/instagram/insta-10.jpg",
      },
      {
        id: 11,
        src: "assets/images/instagram/insta-11.jpg",
      },
      {
        id: 12,
        src: "assets/images/instagram/insta-12.jpg",
      },
    ]);
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        {gallery.map((image) => {
          return (
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              {/*=== Instagram Box ===*/}
              <div className="instagram-box mb-30 wow fadeInDown">
                <div className="instagram-img">
                  <img src={image?.src} alt="Instagram Image" />
                  <div className="insta-overlay" />
                  <a
                    onClick={(e) => {
                      setImg(true);
                      setImgValue([{ src: image?.src, alt: "gallery image" }]);
                    }}
                    className="img-popup insta-icon"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Lightbox
        open={img}
        close={() => setImg(false)}
        slides={imgValue}
        styles={{
          container: { backgroundColor: "rgba(38, 31, 65, .85)" },
        }}
        render={{
          buttonPrev: imgValue.length <= 1 ? () => null : undefined,
          buttonNext: imgValue.length <= 1 ? () => null : undefined,
        }}
      />
    </div>
  );
};
export default GalleryImages;
