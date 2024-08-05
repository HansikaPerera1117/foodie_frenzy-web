import Link from "next/link";

const PageBanner = ({ title, subTitle, pageName }) => {
  return (
    <section
      className="page-banner light-red-bg p-r z-1 bg_cover"
      style={{ backgroundImage: "url(assets/images/bg/page-bg-1.jpg)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="page-banner-content text-center wow fadeInDown">
              <h1 className="page-title">{title ? title : pageName}</h1>
              <p
                className="wow fadeInUp text-white mb-5"
                style={{ wordSpacing: 4 }}
              >
                {subTitle ? subTitle : ""}
              </p>
              <ul className="breadcrumb-link text-white">
                <li>
                  <Link legacyBehavior href="/">
                    Home
                  </Link>
                </li>
                <li className="active">{pageName}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PageBanner;
