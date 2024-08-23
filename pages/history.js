import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Partners from "../src/components/Partners";
import Layout from "../src/layout/Layout";
import { useEffect } from "react";
const History = () => {

  useEffect(() => {
    document.title = "Our History | Foodie Frenzy Restaurant";
  }, []);

  return (
    <Layout>
      <PageBanner
        pageName={"Our History"}
        title="Our History"
        subTitle={
          "Discover the rich heritage and passion that have shaped our culinary journey"
        }
      />{" "}
      <section className="who-we-section pt-130 pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="who-image-box pl-lg-50 mb-50 wow fadeInLeft">
                <img src="assets/images/gallery/history-1.jpg" alt="Image" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="who-content-box content-box-gap mb-50 wow fadeInRight">
                <div className="section-title section-title-left mb-30">
                  <span className="sub-title">who we are ?</span>
                  <h2>We’re Awards Winning Restaurant Company</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis natus sit voluptateen
                  accusantium doloremque laudantium totam aperiaem eaque ipsa
                  quae abillo inventore veritatis
                </p>
                <ul className="check-style-one mb-30">
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
          </div>
        </div>
      </section>
      {/*====== End Who-we Section ======*/}
      {/*====== Start History Section ======*/}
      <section className="history-section pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div className="section-title text-center mb-55 wow fadeInDown">
                <span className="sub-title">Company History</span>
                <h2>Let’s Insight Our History</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="single-history-item wow fadeInLeft mb-100">
                <div className="shape shape-one">
                  <span>
                    <img src="assets/images/shape/line-2.png" alt="shape" />
                  </span>
                </div>
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div className="history-image-box">
                      <img
                        src="assets/images/gallery/history-2.jpg"
                        alt="History Image"
                      />
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="history-content-box">
                      <span className="duration">In 1995 When We Started</span>
                      <p>
                        Sed ut perspiciatis unde omnis natus sit voluptaten
                        accusantium doloremque laudantium totam aperiam eaque
                        ipsa quae abillo inventore veritatis
                      </p>
                      <div className="author-title-thumb d-flex">
                        <div className="author-thumb">
                          <img
                            src="assets/images/gallery/author-1.jpg"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-title">
                          <h4>
                            Jimmie K. Cryer <span>/ CEO &amp; Founder</span>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-history-item wow fadeInRight mb-100">
                <div className="shape shape-one">
                  <span>
                    <img src="assets/images/shape/line-2.png" alt="shape" />
                  </span>
                </div>
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div className="history-image-box">
                      <img
                        src="assets/images/gallery/history-3.jpg"
                        alt="History Image"
                      />
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="history-content-box">
                      <span className="duration">In 1998 We’ve 5 Member</span>
                      <p>
                        Sorem ipsum dolor sit amet consectetur adipiscing elit.
                        Turpis dignissim elit porta augue. Nibh lectust sed non
                        ultrices sed ornare vulputate
                      </p>
                      <ul className="check-style-one">
                        <li>Best Way to Serve Our Foods</li>
                        <li>Low Cost &amp; Onlie Orders</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-history-item wow fadeInLeft mb-100">
                <div className="shape shape-one">
                  <span>
                    <img src="assets/images/shape/line-2.png" alt="shape" />
                  </span>
                </div>
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div className="history-image-box">
                      <img
                        src="assets/images/gallery/history-4.jpg"
                        alt="History Image"
                      />
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="history-content-box">
                      <span className="duration">
                        In 1999 Great Achievement
                      </span>
                      <p>
                        On the other hand denounce righteous indignation and
                        dislike men who are so beguiled demoralized by the
                        charms of pleasure of the moment, so blinded by desire,
                        that they cannot foresee the pain and trouble that are
                        bound to ensue and equal blame
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-history-item wow fadeInRight mb-100">
                <div className="shape shape-one">
                  <span>
                    <img src="assets/images/shape/line-2.png" alt="shape" />
                  </span>
                </div>
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div className="history-image-box">
                      <img
                        src="assets/images/gallery/history-5.jpg"
                        alt="History Image"
                      />
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="history-content-box">
                      <span className="duration">In 2003 Added New Member</span>
                      <p>
                        Sorem ipsum dolor sit amet consectetur adipiscing elit.
                        Turpis dignissim elit porta augue. Nibh lectust sed non
                        ultrices sed ornare vulputate
                      </p>
                      <ul className="check-style-one">
                        <li>
                          25 Years of Experience in Restaurant Services in USA
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      <Partners />
    </Layout>
  );
};
export default History;
