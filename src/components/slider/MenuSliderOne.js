import Link from "next/link";
import Slider from "react-slick";
import { menuSliderOne } from "../../sliderProps";
import { useEffect, useState } from "react";
const MenuSliderOne = () => {
  const [menuSlider, setMenuSlider] = useState([]);

  useEffect(() => {
    setMenuSlider([
      {
        id: 1,
        slide: (
          <div className="menu-grid-item-one text-center mb-60">
            <div className="thumb">
              <img src="assets/images/menu/menu-1.png" alt="" />
            </div>
            <div className="text">
              <h3 className="title">
                <Link legacyBehavior href="/product-details">
                  Steamed Crabs Dish
                </Link>
              </h3>
              <p>Roasted langoustine, consommé</p>
              <span className="price">
                <span className="currency">$</span>253.59
              </span>
            </div>
          </div>
        ),
      },
      {
        id: 2,
        slide: (
          <div className="menu-grid-item-one text-center mb-60">
            <div className="thumb">
              <img src="assets/images/menu/menu-2.png" alt="" />
            </div>
            <div className="text">
              <h3 className="title">
                <Link legacyBehavior href="/product-details">
                  Steamed Crabs Dish
                </Link>
              </h3>
              <p>Roasted langoustine, consommé</p>
              <span className="price">
                <span className="currency">$</span>253.59
              </span>
            </div>
          </div>
        ),
      },
      {
        id: 3,
        slide: (
          <div className="menu-grid-item-one text-center mb-60">
            <div className="thumb">
              <img src="assets/images/menu/menu-3.png" alt="" />
            </div>
            <div className="text">
              <h3 className="title">
                <Link legacyBehavior href="/product-details">
                  Steamed Crabs Dish
                </Link>
              </h3>
              <p>Roasted langoustine, consommé</p>
              <span className="price">
                <span className="currency">$</span>253.59
              </span>
            </div>
          </div>
        ),
      },
      {
        id: 4,
        slide: (
          <div className="menu-grid-item-one text-center mb-60">
            <div className="thumb">
              <img src="assets/images/menu/menu-4.png" alt="" />
            </div>
            <div className="text">
              <h3 className="title">
                <Link legacyBehavior href="/product-details">
                  Steamed Crabs Dish
                </Link>
              </h3>
              <p>Roasted langoustine, consommé</p>
              <span className="price">
                <span className="currency">$</span>253.59
              </span>
            </div>
          </div>
        ),
      },
      {
        id: 5,
        slide: (
          <div className="menu-grid-item-one text-center mb-60">
            <div className="thumb">
              <img src="assets/images/menu/menu-5.png" alt="" />
            </div>
            <div className="text">
              <h3 className="title">
                <Link legacyBehavior href="/product-details">
                  Steamed Crabs Dish
                </Link>
              </h3>
              <p>Roasted langoustine, consommé</p>
              <span className="price">
                <span className="currency">$</span>253.59
              </span>
            </div>
          </div>
        ),
      },
    ]);
  }, []);

  return (
    <Slider {...menuSliderOne} className="menu-slider-one wow fadeInUp">
      {menuSlider.map((menu) => {
        return menu?.slide;
      })}
    </Slider>
  );
};
export default MenuSliderOne;
