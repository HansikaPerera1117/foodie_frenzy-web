"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import Layout from "../src/layout/Layout";
import { testimonialSliderOne } from "../src/sliderProps";
import MenuSliderOne from "../src/components/slider/MenuSliderOne";
import TestimonialSliderThree from "../src/components/slider/TestimonialSliderThree";
import Partners from "../src/components/Partners";
import GalleryImages from "../src/components/slider/GalleryImages";
import { getAllCategories } from "../src/service/categoriesService";
import defaultCategoryImg from "../public/assets/images/default-category-img.png";
import { handleError } from "../src/util/CommonFun";
import ReservationsFrom from "../src/components/ReservationsFrom";

const Index = () => {
  useEffect(() => {
    document.title = "Home | Foodie Frenzy Restaurant";
  }, []);

  const [servicer, setServicer] = useState([]);
  const [categories, setCategories] = useState([]);

  // let dispatch = useDispatch();

  useEffect(() => {
    document.title = "Gallery | Foodie Frenzy Restaurant";
    loadAllCatagories();
    setServicer([
      {
        id: 1,
        value: (
          <div className="col-lg-4 col-md-6 col-sm-12 ">
            <div className="single-features-item-two animate-hover-icon wow fadeInUp mb-40">
              <div className="inner-content d-flex flex-column align-items-center">
                <div className="icon">
                  <i className="flaticon-pizza-slice-1" />
                </div>
                <div className="text text-center">
                  <h3 className="title">Fastfoods</h3>
                  <p>
                    Sit amet consectetur adipisci epsum nisi commodoy elementum
                    non
                  </p>
                  <Link legacyBehavior href="/about">
                    <a className="main-btn btn-black">
                      read more
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 2,
        value: (
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="single-features-item-two animate-hover-icon wow fadeInDown mb-40">
              <div className="inner-content  d-flex flex-column align-items-center">
                <div className="icon">
                  <i className="flaticon-chef-1" />
                </div>
                <div className="text text-center">
                  <h3 className="title">Experience Chefs</h3>
                  <p>
                    Sit amet consectetur adipisci epsum nisi commodoy elementum
                    non
                  </p>
                  <Link legacyBehavior href="/about">
                    <a className="main-btn btn-black">
                      read more
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 3,
        value: (
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="single-features-item-two animate-hover-icon wow fadeInUp mb-40">
              <div className="inner-content  d-flex flex-column align-items-center">
                <div className="icon">
                  <i className="flaticon-delivery-man" />
                </div>
                <div className="text text-center">
                  <h3 className="title">Online Delivery</h3>
                  <p>
                    Sit amet consectetur adipisci epsum nisi commodoy elementum
                    non
                  </p>
                  <Link legacyBehavior href="/about">
                    <a className="main-btn btn-black">
                      read more
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ]);
  }, []);

  const loadAllCatagories = () => {
    let temp = [];
    setCategories([]);
    // popUploader(dispatch, true);
    getAllCategories()
      .then(async (resp) => {
        resp?.data?.records.map((category, index) => {
          if (category?.status === 1) {
            temp.push({
              id: category?.id,
              // image:
              //   category?.file && category.file.length > 0
              //     ? category.file.map((img) => {
              //         img?.originalPath;
              //       })
              //     : defaultCategoryImg,
              image:
                category?.file && category.file.length > 0
                  ? category.file[0]?.originalPath // Ensure you're accessing the correct property
                  : null,
              name: category?.name,
              description:
                category?.description != null ? category?.description : "",
              categories_status: category?.status,
            });
          }
        });
        await setCategories(temp);

        // popUploader(dispatch, false);
      })
      .catch((err) => {
        // popUploader(dispatch, false);
        handleError(err);
      });
  };

  return (
    <Layout header={1} footer={1}>
      {/*=== Start Banner Section ===*/}
      <section className="banner-one p-r z-1">
        <div className="shape shape-one">
          <span>
            <img src="assets/images/hero/hero-shape-1.png" alt="shape" />
          </span>
        </div>
        <div className="shape shape-two">
          <span>
            <img src="assets/images/hero/hero-shape-2.png" alt="shape" />
          </span>
        </div>
        <div className="shape line-shape-one">
          <span>
            <img src="assets/images/shape/line-1.png" alt="shape" />
          </span>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-1 order-2">
              {/*=== Hero Content ===*/}
              <div className="hero-content mb-40 pr-lg-40">
                <h1 className="wow fadeInUp" data-wow-delay=".5s">
                  Flavors Inspired by the Seasons
                </h1>
                <p className="wow fadeInDown" data-wow-delay=".7s">
                  Welcome to Foodie Frenzy , where flavor meets passion. Enjoy a
                  delightful fusion ofcrafted with the freshest ingredients.
                  Join us for an unforgettable dining experience.
                </p>
                <div className="hero-button wow fadeInUp" data-wow-delay=".9s">
                  <Link legacyBehavior href="/menu">
                    <a className="main-btn btn-red">
                      order now
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-2 order-1">
              {/*=== Hero Image ===*/}
              <div
                className="hero-image-box mb-40 wow fadeInRight"
                data-wow-delay=".7s"
              >
                <img src="assets/images/hero/hero-1.png" alt="Hero Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=== End Banner Section ===*/}
      {/*=== Start Features Section ===*/}
      <section className="features-section light-gray-bg pt-75 pb-75">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-12">
              <div className="section-title text-center mb-40">
                <span className="sub-title">What we offer</span>
                <h2>Why Choose Foodie Frenzy Foods</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {servicer.map((service) => {
              return service?.value;
            })}
          </div>
        </div>
      </section>
      {/*=== End Features Section ===*/}
      {/*=== Start Category Section ===*/}
      <section className="features-section pt-75 pb-75">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-12">
              <div className="section-title text-center mb-40">
                <span className="sub-title">Our Popular Food</span>
                <h2>Best Category Foods Menu</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {categories.map((category) => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-12" key={category?.id}>
                  <div className="single-features-item-two animate-hover-icon wow fadeInDown mb-40">
                    <div className="inner-content  d-flex flex-column align-items-center">
                      <div className="icon">
                        <img
                          src={
                            category.image
                              ? category.image
                              : defaultCategoryImg?.src
                          }
                          alt="category image"
                        />
                      </div>
                      <div className="text text-center">
                        <h3 className="title">{category?.name}</h3>
                        <p>{category?.description}</p>
                        <Link legacyBehavior href="/menu">
                          <a className="main-btn btn-black">Explore</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/*=== End Category Section ===*/}
      {/*=== Start About Section ===*/}
      <section className="about-section pt-130">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="about-two_image-box text-md-end mb-20 p-r z-1">
                <div className="shape shape-one">
                  <span />
                </div>
                <div className="row align-items-center">
                  <div className="col-lg-6 col-sm-6">
                    <img
                      src="assets/images/about/image-3.jpg"
                      className="about-img-one mb-30 wow fadeInLeft"
                      alt="About Image"
                    />
                    <img
                      src="assets/images/about/image-4.jpg"
                      className="about-img-two mb-30 wow fadeInDown"
                      alt="About Image"
                    />
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <img
                      src="assets/images/about/image-5.jpg"
                      className="about-img-three mb-30 wow fadeInRight"
                      alt="About Image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about-content-box content-box-gap pl-lg-40">
                <div className="section-title mb-30 wow fadeInDown">
                  <span className="sub-title">About Foodie Frenzy</span>
                  <h2>We Provide Yamee Testy Seafoods Based USA</h2>
                </div>
                <p className="wow fadeInUp">
                  Sit amet consectetur adipiscing epsum nisi commodoy elementum
                  non purus. Praesent imperdiet comm viverra purus tempor
                  tincidunt. Habitant volutpat arcu
                </p>
                <div className="about-button mb-45 wow fadeInDown">
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
                <ul className="check-style-one check-style-50 wow fadeInUp">
                  <li>Chicken Hamburger</li>
                  <li>Italian Coffee</li>
                  <li>Seafoods</li>
                  <li>Professional Chefs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=== End About Section ===*/}
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
                    href="https://www.youtube.com/watch?v=pq3Otf0zbdk"
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
      {/*=== Start Menu Section ===*/}
      <section className="menu-section pt-70 pb-70">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-12">
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">Best food menu</span>
                <h2>Choose Your Best Menus</h2>
              </div>
            </div>
          </div>
          <MenuSliderOne />
        </div>
      </section>
      {/*=== End Menu Section ===*/}
      {/*=== Start Working Section ===*/}
      <section className="working-bg-section pt-130 pb-110 light-red-bg p-r z-1">
        <div
          className="dot-bg bg_cover"
          style={{ backgroundImage: "url(assets/images/bg/dot-bg.png)" }}
        />
        <div
          className="hours-bg bg_cover"
          style={{ backgroundImage: "url(assets/images/bg/hours-bg-1.jpg)" }}
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              {/*=== Working Content Box ===*/}
              <div className="working-content-box wow fadeInLeft">
                <div className="section-title section-title-left mb-50">
                  <span className="sub-title">Working hour</span>
                  <h2>Enjoy Our Foods From 6 Days In a Week</h2>
                </div>
                <div className="single-hour-box mb-20">
                  <h4 className="title">
                    Monday - Friday <span className="dot-border" />
                    <span className="time">09am-6pm</span>
                  </h4>
                </div>
                <div className="single-hour-box mb-20">
                  <h4 className="title">
                    Saturday
                    <span className="dot-border" />
                    <span className="time">08am-7pm</span>
                  </h4>
                </div>
                <div className="single-hour-box mb-20">
                  <h4 className="title">
                    Sunday
                    <span className="dot-border" />
                    <span className="time">Closed</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=== End Working Section ===*/}
      {/*=== Start Reservation Section ===*/}
      <section className="reservation-line-section p-r z-1 pt-130 pb-80">
        <div className="line-shape line-shape-one">
          <span>
            <img src="assets/images/shape/line-1.png" alt="Shape" />
          </span>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/*=== Reservation Image Box ===*/}
              <div className="reservation-image-box wow fadeInLeft mb-50 mb-20">
                <img
                  src="assets/images/contact/contact-8.jpg"
                  alt="Reservation Image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== Reservation Content Box ===*/}
              <div className="reservation-content-box content-box-gap wow fadeInRight mb-50 pl-lg-70">
                <div className="section-title section-title-left mb-20">
                  <span className="sub-title">Booking table</span>
                  <h2>Make A Reservations</h2>
                </div>
                <p>
                  Sit amet consectetur adipiscing elitsue risus mauris
                  adipiscing phasellus aene ante orcirat
                </p>
                {/*=== Reservation Form ===*/}
                <div className="reservation-style-one">
                  <ReservationsFrom />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=== End Reservation Section ===*/}
      {/*=== Start Chefs Section ===*/}
      <section className="chefs-bg-section light-red-bg pt-130 pb-100 bg_cover p-r z-1">
        <div
          className="dot-bg bg_cover"
          style={{ backgroundImage: "url(assets/images/bg/dot-bg.png)" }}
        />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-12">
              {/*=== Chef Content Box ===*/}
              <div className="chef-content-box content-box-gap mb-30 pr-lg-30 wow fadeInLeft">
                <div className="section-title section-title-left mb-30">
                  <span className="sub-title">Best food menu</span>
                  <h2>Meet Our Exclusive &amp; Master Chefs</h2>
                </div>
                <ul className="check-style-one">
                  <li>25 Years of Experience in Restaurant Services in USA</li>
                  <li>
                    Any Kind Of Food Made For Customer and So Much Yamee $ Testy
                  </li>
                </ul>
                <p>
                  Sit amet consectetur adipiscing elitsue risus mauris quam
                  adipiscing phasellus aene ante orcirat scelerisque enim ut
                  nulla
                </p>
                <Link legacyBehavior href="/chefs">
                  <a className="main-btn filled-btn">
                    become a chef
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-8 col-lg-12">
              <div className="row">
                <div className="col-xl-4 col-md-6 col-sm-12">
                  {/*=== Single Team Item ===*/}
                  <div className="single-team-item mb-30 wow fadeInUp">
                    <div className="chef-img">
                      <img
                        src="assets/images/team/chef-1.jpg"
                        alt="Chef Image"
                      />
                      <div className="chef-overlay" />
                      <div className="hover-content">
                        <h3 className="title">Jimmie K. Cryer</h3>
                        <p className="position">Senior Chef</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                  {/*=== Single Team Item ===*/}
                  <div className="single-team-item mb-30 wow fadeInUp">
                    <div className="chef-img">
                      <img
                        src="assets/images/team/chef-2.jpg"
                        alt="Chef Image"
                      />
                      <div className="chef-overlay" />
                      <div className="hover-content">
                        <h3 className="title">Jimmie K. Cryer</h3>
                        <p className="position">Senior Chef</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                  {/*=== Single Team Item ===*/}
                  <div className="single-team-item mb-30 wow fadeInUp">
                    <div className="chef-img">
                      <img
                        src="assets/images/team/chef-3.jpg"
                        alt="Chef Image"
                      />
                      <div className="chef-overlay" />
                      <div className="hover-content">
                        <h3 className="title">Jimmie K. Cryer</h3>
                        <p className="position">Senior Chef</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                  {/*=== Single Team Item ===*/}
                  <div className="single-team-item mb-30 wow fadeInUp">
                    <div className="chef-img">
                      <img
                        src="assets/images/team/chef-4.jpg"
                        alt="Chef Image"
                      />
                      <div className="chef-overlay" />
                      <div className="hover-content">
                        <h3 className="title">Jimmie K. Cryer</h3>
                        <p className="position">Senior Chef</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                  {/*=== Single Team Item ===*/}
                  <div className="single-team-item mb-30 wow fadeInUp">
                    <div className="chef-img">
                      <img
                        src="assets/images/team/chef-5.jpg"
                        alt="Chef Image"
                      />
                      <div className="chef-overlay" />
                      <div className="hover-content">
                        <h3 className="title">Jimmie K. Cryer</h3>
                        <p className="position">Senior Chef</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                  {/*=== Single Team Item ===*/}
                  <div className="single-team-item mb-30 wow fadeInUp">
                    <div className="chef-img">
                      <img
                        src="assets/images/team/chef-6.jpg"
                        alt="Chef Image"
                      />
                      <div className="chef-overlay" />
                      <div className="hover-content">
                        <h3 className="title">Jimmie K. Cryer</h3>
                        <p className="position">Senior Chef</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      {/*=== End Chefs Section ===*/}
      {/*=== Start Testimonial Section ===*/}
      <section className="testimonial-section-three pt-120 pb-80">
        <div className="container">
          <TestimonialSliderThree />
        </div>
      </section>
      {/*=== End Testimonial Section ===*/}
      {/*=== Start Instagram Section ===*/}
      <section className="instagram-gallery pt-130 pb-100">
        <GalleryImages />
      </section>
      {/*=== End Instagram Section ===*/}
      {/*=== Start Event Section ===*/}
      <section className="event-section pt-70 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="event-one_image-box text-center p-r z-1 wow fadeInLeft">
                <img
                  src="assets/images/gallery/event-1.png"
                  alt="Event Image"
                />
                <div className="shape circle-shape">
                  <span />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="event-content-box content-box-gap pl-lg-50 wow fadeInRight">
                <div className="section-title section-title-left mb-30">
                  <span className="sub-title">events &amp; party</span>
                  <h2>Reservations For Enjoying Your Events &amp; Party</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis natus voluptatem accusantium
                  doloremque laudantium totam aperiam eaque queab inventore
                  veritatis et quasi architecto beatae vitae sunt explicabo.
                </p>
                <a href="/reservations" className="main-btn btn-red">
                  reservations
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=== End Event Section ===*/}
      {/*====== Start Partners Section ======*/}
      <Partners />
      {/*====== End Partners Section ======*/}
    </Layout>
  );
};
export default Index;
