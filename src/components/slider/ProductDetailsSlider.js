import { useEffect, useState } from "react";
import Slider from "react-slick";

const ProductDetailsSlider = ({ productImages }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });
  const thumbs = {
    dots: false,
    arrows: false,
    speed: 800,
    infinite: true,
    autoplay: true,
    focusOnSelect: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  const slider = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="product-gallery-area mb-50 wow fadeInLeft">
      {console.log(productImages)}
      <Slider
        {...slider}
        asNavFor={nav2}
        ref={(slider) => setSlider1(slider)}
        className="product-big-slider mb-30"
      >
        {productImages &&
          productImages.length > 0 &&
          productImages.map((image) => {
            return (
              <div className="product-img">
                <img
                  width="100%"
                  src={image?.file?.originalPath}
                  alt="Product"
                  className="rounded-4"
                />
              </div>
            );
          })}
      </Slider>
      <Slider
        {...thumbs}
        asNavFor={nav1}
        ref={(slider) => setSlider2(slider)}
        className="product-thumb-slider"
      >
        {productImages &&
          productImages.length > 0 &&
          productImages.map((image) => {
            return (
              <div className="product-img">
                <img
                  src={image?.file?.originalPath}
                  alt="Product"
                  className="rounded-4"
                />
              </div>
            );
          })}
      </Slider>
    </div>
  );
};
export default ProductDetailsSlider;
