import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Partners from "../src/components/Partners";
import QichenCounter from "../src/components/QichenCounter";
import TestimonialSliderThree from "../src/components/slider/TestimonialSliderThree";
import Layout from "../src/layout/Layout";
const About = () => {
  return (
    <Layout>
      <PageBanner
        pageName={"About Us"}
        subTitle={
          "Savor the taste of culinary artistry where every dish tells a delicious story"
        }
      />
      <section className="about-shape-section pt-130 pb-80 p-r z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-three_image-box text-lg-end mb-20">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <img
                      src="assets/images/about/image-7.jpg"
                      className="about-img-one mb-30 wow fadeInUp"
                      alt="About Image"
                    />
                    <img
                      src="assets/images/about/image-8.jpg"
                      className="about-img-two mb-30 wow fadeInDown"
                      alt="About Image"
                    />
                  </div>
                  <div className="col-md-6">
                    <img
                      src="assets/images/about/image-9.jpg"
                      className="about-img-three mb-30 wow fadeInRight"
                      alt="About Image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-three_content-box content-box-gap pl-lg-45 mb-50">
                <div className="section-title section-title-left mb-30 wow fadeInUp">
                  <span className="sub-title">About Qichen</span>
                  <h2>The Cleanest, Most Delicious Vegan Cookie Dough Ever.</h2>
                </div>
                <p className="wow fadeInDown">
                  Sed ut perspiciatis unde omnis natus sit voluptatem
                  accusantium doloremque laudantium totam aperiam eaque
                  queabillo inventore veritatis et quasi architecto beatae vitae
                  sunt explicabo.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="fancy-icon-box mb-50 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-food-serving" />
                      </div>
                      <div className="text">
                        <h5>532+ Popular Testy Foods Menu</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="fancy-icon-box mb-50 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-discuss" />
                      </div>
                      <div className="text">
                        <h5>6534+ Satisfied Our Global Customers</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="fancy-icon-box mb-50 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-certificate" />
                      </div>
                      <div className="text">
                        <h5>We’ve 25+ Years Of Experience</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="fancy-icon-box mb-50 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-smartphone" />
                      </div>
                      <div className="text">
                        <h5>432+ Foods Iteams Online Orders</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-button wow fadeInUp">
                  <Link legacyBehavior href="/about">
                    <a className="main-btn btn-red">
                      learn more
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <a href="tel:000(123)45689" className="call-button">
                    <div className="icon">
                      <i className="fas fa-headset" />
                    </div>
                    <div className="text">
                      <span>Call For Order</span>
                      <h5>000 (123) 456 89</h5>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=== End About Section ===*/}
      {/*=== Start Fact Section ===*/}
      <section className="fact-section dark-red-bg pt-75 pb-35">
        <div className="container">
          <QichenCounter />
        </div>
      </section>
      {/*=== End Fact Section ===*/}
      {/*=== Start Why_choose Section ===*/}
      <section className="why-choose-us pt-130 pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-12">
              <div className="choose-content-box content-box-gap mb-30 wow fadeInLeft">
                <div className="section-title section-title-left mb-20">
                  <span className="sub-title">Why Choos us</span>
                  <h2>
                    We’re Awards Winning Restaurant. 25+ Years Of Experience In
                    Restaurant Services
                  </h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus sit voluptatem
                  accusantium doloremque laudantium totam rem aperiam eaque ipsa
                  quae ab illo inventore veritatis
                </p>
                <ul className="check-style-one mb-35">
                  <li>Best Way to Serve Our Foods</li>
                  <li>Low Cost &amp; Onlie Orders</li>
                </ul>
                <Link legacyBehavior href="/about">
                  <a className="main-btn btn-red">
                    learn more
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="choose-item-list">
                <div className="row">
                  <div className="col-md-6">
                    <div className="fancy-features-item mb-30 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-pizza-slice-1" />
                      </div>
                      <div className="text">
                        <h3 className="title">Fastfoods</h3>
                        <p>Sit amet consecte adisce epsum nisi commos</p>
                        <Link legacyBehavior href="/about">
                          <a className="btn-link">Read more</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="fancy-features-item mb-30 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-chef-1" />
                      </div>
                      <div className="text">
                        <h3 className="title">Experience Chefs</h3>
                        <p>Sit amet consecte adisce epsum nisi commos</p>
                        <Link legacyBehavior href="/about">
                          <a className="btn-link">Read more</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="fancy-features-item mb-30 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-delivery-man" />
                      </div>
                      <div className="text">
                        <h3 className="title">Online Delivery</h3>
                        <p>Sit amet consecte adisce epsum nisi commos</p>
                        <Link legacyBehavior href="/about">
                          <a className="btn-link">Read more</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="fancy-features-item mb-30 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-food-serving" />
                      </div>
                      <div className="text">
                        <h3 className="title">Fine Dining</h3>
                        <p>Sit amet consecte adisce epsum nisi commos</p>
                        <Link legacyBehavior href="/about">
                          <a className="btn-link">Read more</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=== End Why_choose Section ===*/}
      {/*=== Start Team Section ===*/}
      <section className="team-section light-red-bg p-r z-1 pt-120 pb-100">
        <div
          className="dot-bg bg_cover"
          style={{ backgroundImage: "url(assets/images/bg/dot-bg.png)" }}
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-10">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">Best food menu</span>
                <h2>Meet Our Experience &amp; Master Chefs</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="single-team-item mb-30 wow fadeInUp">
                <div className="chef-img">
                  <img src="assets/images/team/chef-7.jpg" alt="Chef Image" />
                  <div className="chef-overlay" />
                  <div className="hover-content">
                    <h3 className="title">Jimmie K. Cryer</h3>
                    <p className="position">Senior Chef</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="single-team-item mb-30 wow fadeInUp">
                <div className="chef-img">
                  <img src="assets/images/team/chef-8.jpg" alt="Chef Image" />
                  <div className="chef-overlay" />
                  <div className="hover-content">
                    <h3 className="title">Jimmie K. Cryer</h3>
                    <p className="position">Senior Chef</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="single-team-item mb-30 wow fadeInUp">
                <div className="chef-img">
                  <img src="assets/images/team/chef-9.jpg" alt="Chef Image" />
                  <div className="chef-overlay" />
                  <div className="hover-content">
                    <h3 className="title">Jimmie K. Cryer</h3>
                    <p className="position">Senior Chef</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="single-team-item mb-30 wow fadeInUp">
                <div className="chef-img">
                  <img src="assets/images/team/chef-10.jpg" alt="Chef Image" />
                  <div className="chef-overlay" />
                  <div className="hover-content">
                    <h3 className="title">Jimmie K. Cryer</h3>
                    <p className="position">Senior Chef</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="team-button mt-30 text-center wow fadeInUp">
                <Link legacyBehavior href="/chefs">
                  <a className="main-btn btn-red">
                    become a chef
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=== End Team Section ===*/}
      {/*=== Start Video Section ===*/}
      <section className="video-line-section pt-130 pb-80 p-r z-1">
        <div className="line-shape line-shape-one">
          <span>
            <img src="assets/images/shape/line-1.png" alt="Shape" />
          </span>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              {/*=== Video Image Box ===*/}
              <div className="video-one_image-box mb-50 p-r z-1 wow fadeInLeft">
                <img
                  src="assets/images/gallery/video-2.jpg"
                  alt="Video Image"
                />
                <div className="image-overlay" />
                <div className="play-content-box">
                  <a
                    href="https://www.youtube.com/watch?v=t8k71QcArnk"
                    className="video-popup"
                  >
                    <i className="fas fa-play" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              {/*=== Video Content Box ===*/}
              <div className="video-content-box content-box-gap pl-lg-40 mb-50 wow fadeInRight">
                <div className="section-title section-title-left">
                  <span className="sub-title">Watch Videos</span>
                  <h2>How Can We Made Foods For Customers</h2>
                </div>
                <p>
                  Sit amet consectetur adipiscing elitsue risus mauris quam
                  adipiscing phasellus aene ante orcirat scelerisque enim ut
                  nulla
                </p>
                <ul className="check-style-one mb-30">
                  <li>Best Way to Serve Our Foods</li>
                  <li>Low Cost &amp; Onlie Orders</li>
                </ul>
                <Link legacyBehavior href="/about">
                  <a className="main-btn btn-black">
                    watch more
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=== End Video Section ===*/}
      {/*=== Start Team Section ===*/}
      <section className="testimonial-section-three pb-130">
        <div className="container">
          <TestimonialSliderThree />
        </div>
      </section>
      {/*=== End Team Section ===*/}
      {/*====== Start Partners Section ======*/}
      <Partners />
    </Layout>
  );
};
export default About;
