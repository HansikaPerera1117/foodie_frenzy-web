import PageBanner from "../src/components/PageBanner";
import Partners from "../src/components/Partners";
import ReservationsFrom from "../src/components/ReservationsFrom";
import Layout from "../src/layout/Layout";
const Reservations = () => {
  return (
    <Layout>
      <PageBanner pageName={"Fastfood"} title="Menu" />{" "}
      <section className="reservation-section pt-130 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="reservation-img wow fadeInLeft mb-50">
                <img src="assets/images/contact/contact-5.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="reservation-content-box wow fadeInRight mb-50">
                <div className="section-title text-center mb-30">
                  <span className="sub-title">Booking table</span>
                  <h2>Make A Reservations</h2>
                </div>
                <div className="reservation-style-four">
                  <ReservationsFrom />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Reservation Section ======*/}
      {/*====== Start Map Section ======*/}
      <section className="map-section pb-130 wow fadeInUp">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="map-box">
                <iframe src="https://maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed" />
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      <Partners />
    </Layout>
  );
};
export default Reservations;
