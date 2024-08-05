import Slider from "react-slick";
import { testimonialSliderThree } from "../../sliderProps";

import { Component, Fragment } from "react";

export class TestimonialSliderThree extends Component {
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
        <div className="row align-items-end">
          <div className="col-md-8">
            <div className="section-title section-title-left mb-50 wow fadeInLeft">
              <span className="sub-title">Foods reviews</span>
              <h2>Global Customer Feedback</h2>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial-arrows wow fadeInRight mb-60">
              <div className="prev slick-arrow" onClick={this.previous}>
                <i className="far fa-arrow-left" />
              </div>
              <div className="next slick-arrow" onClick={this.next}>
                <i className="far fa-arrow-right" />
              </div>
            </div>
          </div>
        </div>
        <Slider
          ref={(c) => (this.slider = c)}
          {...testimonialSliderThree}
          className="testimonial-slider-three wow fadeInUp"
        >
          <div className="single-testimonial-three">
            <div className="testimonial-inner-content">
              <div className="rating-quote-box d-flex align-items-center justify-content-between">
                <div className="ratings-box">
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
                </div>
                <div className="quote">
                  <i className="flaticon-right-quote" />
                </div>
              </div>
              <h3>“Yamee Foods”</h3>
              <p>
                Sed ut perspiciatis unde omiste natus error sit volupt
                accusantium doloremque laudantium totam rem aperiam, eaque ipsa
                quae ab inventore veritatis et quase{" "}
              </p>
              <div className="author-title-thumb">
                <div className="author-thumb">
                  <img
                    src="assets/images/testimonial/author-thumb-2.jpg"
                    alt="Author Thumb"
                  />
                </div>
                <div className="author-title">
                  <h3 className="title">Hubert J. Johnson</h3>
                  <p className="position">CEO &amp; Founder</p>
                </div>
              </div>
            </div>
          </div>
          <div className="single-testimonial-three">
            <div className="testimonial-inner-content">
              <div className="rating-quote-box d-flex align-items-center justify-content-between">
                <div className="ratings-box">
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
                </div>
                <div className="quote">
                  <i className="flaticon-right-quote" />
                </div>
              </div>
              <h3>“Mind blowing”</h3>
              <p>
                Sed ut perspiciatis unde omiste natus error sit volupt
                accusantium doloremque laudantium totam rem aperiam, eaque ipsa
                quae ab inventore veritatis et quase{" "}
              </p>
              <div className="author-title-thumb">
                <div className="author-thumb">
                  <img
                    src="assets/images/testimonial/author-thumb-3.jpg"
                    alt="Author Thumb"
                  />
                </div>
                <div className="author-title">
                  <h3 className="title">Dwayne S. Gilfillan</h3>
                  <p className="position">Junior Manager</p>
                </div>
              </div>
            </div>
          </div>
          <div className="single-testimonial-three">
            <div className="testimonial-inner-content">
              <div className="rating-quote-box d-flex align-items-center justify-content-between">
                <div className="ratings-box">
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
                </div>
                <div className="quote">
                  <i className="flaticon-right-quote" />
                </div>
              </div>
              <h3>“Delicious”</h3>
              <p>
                Sed ut perspiciatis unde omiste natus error sit volupt
                accusantium doloremque laudantium totam rem aperiam, eaque ipsa
                quae ab inventore veritatis et quase{" "}
              </p>
              <div className="author-title-thumb">
                <div className="author-thumb">
                  <img
                    src="assets/images/testimonial/author-thumb-4.jpg"
                    alt="Author Thumb"
                  />
                </div>
                <div className="author-title">
                  <h3 className="title">Michael B. Jorgensen</h3>
                  <p className="position">Businessman</p>
                </div>
              </div>
            </div>
          </div>
          <div className="single-testimonial-three">
            <div className="testimonial-inner-content">
              <div className="rating-quote-box d-flex align-items-center justify-content-between">
                <div className="ratings-box">
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
                </div>
                <div className="quote">
                  <i className="flaticon-right-quote" />
                </div>
              </div>
              <h3>“Mind blowing”</h3>
              <p>
                Sed ut perspiciatis unde omiste natus error sit volupt
                accusantium doloremque laudantium totam rem aperiam, eaque ipsa
                quae ab inventore veritatis et quase{" "}
              </p>
              <div className="author-title-thumb">
                <div className="author-thumb">
                  <img
                    src="assets/images/testimonial/author-thumb-2.jpg"
                    alt="Author Thumb"
                  />
                </div>
                <div className="author-title">
                  <h3 className="title">Brian A. Barnes</h3>
                  <p className="position">CEO &amp; Founder</p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </Fragment>
    );
  }
}

export default TestimonialSliderThree;
