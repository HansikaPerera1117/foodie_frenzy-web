import dynamic from "next/dynamic";
import PageBanner from "../src/components/PageBanner";
import Partners from "../src/components/Partners";
import Layout from "../src/layout/Layout";
import { useEffect } from "react";
const GalleryIsotope = dynamic(
  () => import("../src/components/GalleryIsotope"),
  {
    ssr: false,
  }
);
const Gallery = () => {
  useEffect(() => {
    document.title = "Gallery | Foodie Frenzy Restaurant";
  }, []);

  return (
    <Layout>
      <PageBanner
        pageName={"Our Gallery"}
        title="Our Gallery"
        subTitle={
          "Feast your eyes on a visual journey of our culinary delights and dining experiences"
        }
      />
      <section className="gallery-section pt-120 pb-90" id="gallery-filter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div className="section-title text-center mb-50 wow fadeInUp">
                <span className="sub-title">photo gallery</span>
                <h2>Look Inside Photo Gallery</h2>
              </div>
            </div>
          </div>
          <GalleryIsotope />
        </div>
      </section>{" "}
      <Partners />
    </Layout>
  );
};
export default Gallery;
