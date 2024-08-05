import Link from "next/link";
import Slider from "react-slick";
import { menuSliderOne } from "../../sliderProps";
const MenuSliderOne = () => {
  return (
    <Slider {...menuSliderOne} className="menu-slider-one wow fadeInUp">
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
    </Slider>
  );
};
export default MenuSliderOne;
