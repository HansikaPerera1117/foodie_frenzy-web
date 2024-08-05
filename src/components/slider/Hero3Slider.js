import Link from "next/link";
import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import { heroSliderOne } from "../../sliderProps";

export default class Hero3Slider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    return (
      <Fragment>
        <Slider
          {...heroSliderOne}
          ref={(c) => (this.slider = c)}
          className="hero-slider-one"
        >
          <div className="single-slider">
            <div className="container-fluid">
              <div className="hero-content text-white">
                <h1 data-animation="fadeInUp" data-delay=".5s">
                  Lobster Claws
                </h1>
                <div
                  className="hero-button"
                  data-animation="fadeInDown"
                  data-delay=".7s"
                >
                  <Link legacyBehavior href="/menu-seafood">
                    <a className="main-btn btn-red">
                      order now
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <div
                className="hero-image"
                data-animation="fadeInUp"
                data-delay=".8s"
              >
                <div className="image-overlay" />
                <img
                  src="assets/images/hero/hero-slider-1.jpg"
                  alt="hero image"
                />
              </div>
            </div>
          </div>
          <div className="single-slider">
            <div className="container-fluid">
              <div className="hero-content text-white">
                <h1 data-animation="fadeInUp" data-delay=".5s">
                  Lobster Reef
                </h1>
                <div
                  className="hero-button"
                  data-animation="fadeInDown"
                  data-delay=".7s"
                >
                  <Link legacyBehavior href="/menu-seafood">
                    <a className="main-btn btn-red">
                      order now
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <div
                className="hero-image"
                data-animation="fadeInUp"
                data-delay=".8s"
              >
                <div className="image-overlay" />
                <img
                  src="assets/images/hero/hero-slider-2.jpg"
                  alt="hero image"
                />
              </div>
            </div>
          </div>
          <div className="single-slider">
            <div className="container-fluid">
              <div className="hero-content text-white">
                <h1 data-animation="fadeInUp" data-delay=".5s">
                  Lobster Furry
                </h1>
                <div
                  className="hero-button"
                  data-animation="fadeInDown"
                  data-delay=".7s"
                >
                  <Link legacyBehavior href="/menu-seafood">
                    <a className="main-btn btn-red">
                      order now
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <div
                className="hero-image"
                data-animation="fadeInUp"
                data-delay=".8s"
              >
                <div className="image-overlay" />
                <img
                  src="assets/images/hero/hero-slider-3.jpg"
                  alt="hero image"
                />
              </div>
            </div>
          </div>
        </Slider>
        <div className="hero-arrows">
          <div className="prev slick-arrow" onClick={this.previous}>
            <i className="far fa-arrow-left" />
          </div>
          <div className="next slick-arrow" onClick={this.next}>
            <i className="far fa-arrow-right" />
          </div>
        </div>
      </Fragment>
    );
  }
}
