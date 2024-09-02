import { useEffect, useState } from "react";
import PageBanner from "../src/components/PageBanner";
import Partners from "../src/components/Partners";
import Layout from "../src/layout/Layout";
import { customToastMsg, handleError } from "../src/util/CommonFun";
import { sendInquiry } from "../src/service/inquiryService";
const Contact = () => {
  const [customerDetails, setCustomerDetails] = useState({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    document.title = "Contact Us | Foodie Frenzy Restaurant";
    setCustomerDetails(
      localStorage.getItem("CUSTOMER")
        ? JSON.parse(localStorage.getItem("CUSTOMER"))
        : {}
    );
  }, []);

  const checkLoginCustomer = () => {
    if (localStorage.getItem("CUSTOMER")) {
      handleSubmitInquiry();
    } else {
      customToastMsg("You have to login before send an inquiry");
    }
  };

  const handleSubmitInquiry = () => {
    let isValidated = false;
    if (message === "") {
      customToastMsg("Message cannot be empty");
    } else {
      isValidated = true;
    }

    if (isValidated) {
      const data = {
        email: customerDetails.email,
        message: message,
      };

      console.log(data);

      sendInquiry(data)
        .then((response) => {
          // popUploader(dispatch, false);
          customToastMsg("Your inquiry message send successfully", 1);
          setMessage("");
        })
        .catch((error) => {
          // popUploader(dispatch, false);
          handleError(error);
        });
    }
  };

  return (
    <Layout>
      <PageBanner
        pageName={"Contact Us"}
        title="Contact"
        subTitle={"Get in touch with us for reservations, inquiries, and more"}
      />{" "}
      <section className="contact-section pt-130 pb-130">
        <div className="container">
          <div className="contact-info-wrapper pt-70 pb-30 wow fadeInUp">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-10">
                <div className="section-title text-center mb-50">
                  <span className="sub-title">Contact Us</span>
                  <h2>Get In Touch For More Info</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="single-info-box mb-40">
                  <div className="icon">
                    <img src="assets/images/icon/icon-7.png" alt="icon" />
                  </div>
                  <div className="info">
                    <span className="title">Location</span>
                    <p>No. 36 De Kretser Pl, Colombo 00400</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="single-info-box mb-40">
                  <div className="icon">
                    <img src="assets/images/icon/icon-8.png" alt="icon" />
                  </div>
                  <div className="info">
                    <span className="title">Email Address</span>
                    <p>
                      <a href="mailto:hansikaperera59@gmail.com">
                        foodiefrenzy@gmail.com
                      </a>
                    </p>
                    <p>
                      <a href="mailto:foodiefrenzy.net">foodiefrenzy.net</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="single-info-box mb-40">
                  <div className="icon">
                    <img src="assets/images/icon/icon-9.png" alt="icon" />
                  </div>
                  <div className="info">
                    <span className="title">Contact Us</span>
                    <p>
                      Mobile :<a href="tel:+94755646280">+94 755646280</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-wrapper-one mt-80 pt-70 pb-80 wow fadeInUp">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-12">
                <div className="section-title text-center mb-60">
                  <span className="sub-title">Consultation</span>
                  <h2>Send Us Message</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <form className="contact-form-one">
                  <div className="row justify-content-center">
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          disabled={true}
                          type="text"
                          className="form_control"
                          placeholder={
                            Object.keys(customerDetails).length === 0
                              ? "Name"
                              : customerDetails.firstName +
                                " " +
                                customerDetails.lastName
                          }
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          disabled={true}
                          type="text"
                          className="form_control"
                          placeholder={
                            Object.keys(customerDetails).length === 0
                              ? "Contact No"
                              : customerDetails?.customer?.contactNo
                          }
                        />
                      </div>
                    </div>
                    <div className="col-lg-126">
                      <div className="form_group">
                        <input
                          disabled={true}
                          type="email"
                          className="form_control"
                          placeholder={
                            Object.keys(customerDetails).length === 0
                              ? "Email"
                              : customerDetails.email
                          }
                          name="email"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <textarea
                          className="form_control"
                          placeholder="Write Message"
                          name="message"
                          defaultValue={""}
                          value={message}
                          onChange={(e) => {
                            setMessage(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <button
                          type="button"
                          className="main-btn btn-red"
                          onClick={() => {
                            checkLoginCustomer();
                          }}
                        >
                          Send us message
                          <i className="far fa-arrow-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Contact Section ======*/}
      {/*====== Start Contact Map Section ======*/}
      <section className="contact-page-map wow fadeInUp">
        {/*=== Map Box ===*/}
        <div className="map-box">
          <iframe src="https://maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed" />
        </div>
      </section>{" "}
      <Partners />
    </Layout>
  );
};
export default Contact;
