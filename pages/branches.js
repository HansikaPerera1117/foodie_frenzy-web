"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Partners from "../src/components/Partners";
import QichenCounter from "../src/components/QichenCounter";
import TestimonialSliderThree from "../src/components/slider/TestimonialSliderThree";
import Layout from "../src/layout/Layout";
import { handleError } from "../src/util/CommonFun";
import { getAllBranches } from "../src/service/branchService";
import parse from "html-react-parser";

const Branches = () => {
  const [branchList, setBranchList] = useState([]);

  // let dispatch = useDispatch();

  useEffect(() => {
    document.title = "Our Branches | Foodie Frenzy Restaurant";
    loadAllBranches();
  }, []);

  const loadAllBranches = () => {
    let temp = [];
    setBranchList([]);
    // popUploader(dispatch, true);
    getAllBranches()
      .then(async (resp) => {
        resp?.data?.records.map((branch, index) => {
          temp.push({
            id: branch?.id,
            name: branch?.name,
            facilities: branch?.facilities,
            address: branch?.address,
            locationUrl: branch?.url,
          });
        });
        console.log(temp);

        await setBranchList(temp);
        // popUploader(dispatch, false);
      })
      .catch((err) => {
        // popUploader(dispatch, false);
        handleError(err);
      });
  };
  return (
    <Layout>
      <PageBanner
        pageName={"Our Branches"}
        subTitle={
          "Indulge in the finest flavors from around the country as you explore our diverse branches, each offering a unique culinary experience."
        }
      />
      {/*=== Start branches Section ===*/}
      <section className="about-shape-section pt-130 pb-80 p-r z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-three_content-box content-box-gap pl-lg-45 mb-50">
                <div className="section-title section-title-left mb-30 wow fadeInUp">
                  <span className="sub-title">Foodie Frenzy Branches</span>
                  <h2>
                    Savor the world's finest flavors at our branches, each
                    offering unique experiences
                  </h2>
                </div>
                <p className="wow fadeInDown">
                  At each of our branches, we bring you the best of culinary
                  artistry, crafted to perfection. Every location reflects our
                  unwavering dedication to delivering extraordinary dining
                  experiences. From the moment you step in, expect to be treated
                  to a symphony of flavors, ambiance, and service that goes
                  beyond the ordinary.
                </p>
                <p className="wow fadeInDown">
                  Our branches are not just places to dine—they're destinations
                  where quality and innovation converge. Visit us, and let each
                  location surprise and delight you in its own special way.
                </p>
                <p className="wow fadeInDown">
                  This version emphasizes the quality and consistency across all
                  your branches while highlighting the unique experiences each
                  location offers.
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
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-three_image-box text-lg-end mb-20">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <img
                      src="assets/images/gallery/branch-2.jpg"
                      className="about-img-one mb-30 wow fadeInUp"
                      alt="About Image"
                    />
                    <img
                      src="assets/images/gallery/branch-3.jpg"
                      className="about-img-two mb-30 wow fadeInDown"
                      alt="About Image"
                    />
                  </div>
                  <div className="col-md-6">
                    <img
                      src="assets/images/gallery/branch-1.jpg"
                      className="about-img-three mb-30 wow fadeInRight"
                      alt="About Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=== End branches Section ===*/}

      {/*=== Start branch list Section ===*/}
      <section className="features-section  pb-75">
        <div className="container">
          <div className="row justify-content-start">
            {branchList.map((branch) => {
              console.log(branch);

              return (
                <div className="col-lg-12 col-md-12 col-sm-12 " key={branch?.id}>
                  <div className="single-features-item-two animate-hover-icon wow fadeInDown mb-40">
                    <div className="inner-content  d-flex flex-column align-items-center">
                      <div className="text text-start">
                        <h3 className="title">{branch?.name}</h3>
                        <p>{parse(branch?.facilities)}</p>
                        <p>Address : {branch?.address}</p>
                        <a
                          legacyBehavior
                          target="blank"
                          href={branch?.locationUrl}
                        >
                          <a className="main-btn btn-black">Branch Location</a>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/*=== End branch list Section ===*/}

      <Partners />
    </Layout>
  );
};
export default Branches;
