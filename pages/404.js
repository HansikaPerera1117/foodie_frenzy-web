import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Partners from "../src/components/Partners";
import Layout from "../src/layout/Layout";
const E404 = () => {
  return (
    <Layout>
      <section className="error-page-area pt-130 pb-130 p-r z-1">
        <div className="object object-one">
          <span>
            <img src="assets/images/shape/element-2.png" alt="" />
          </span>
        </div>
        <div className="object object-two">
          <span>
            <img src="assets/images/shape/element-3.png" alt="" />
          </span>
        </div>
        <div className="object object-three">
          <span>
            <img src="assets/images/shape/element-4.png" alt="" />
          </span>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="error-content text-center wow fadeInUp">
                <img
                  src="assets/images/gallery/404.png"
                  className="mb-110"
                  alt="404 Image"
                />
                <h2>OPPS! This Page are Can’t Be Found</h2>
                <p>
                  Sit amet consectetur adipiscing elit. Et id purus sem morbi.
                  Integer a sollicitudin ac eget sed consectetur et nam.
                  Elementum eu egestas faucibus bibendum aliquetesy ullamcorper
                  quis aliquet lorem. Mor phasellus dictum tellus
                </p>
                <Link legacyBehavior href="/">
                  <a className="main-btn btn-red">
                    go to home
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Partners />
    </Layout>
  );
};
export default E404;
