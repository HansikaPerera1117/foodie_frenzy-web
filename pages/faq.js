import { Nav, Tab } from "react-bootstrap";
import PageBanner from "../src/components/PageBanner";
import Partners from "../src/components/Partners";
import QichenAccordion from "../src/components/QichenAccordion";
import ReservationsFrom from "../src/components/ReservationsFrom";
import Layout from "../src/layout/Layout";
const FAQ = () => {
  return (
    <Layout>
      <PageBanner pageName={"Faqs"} title="Faqs" />{" "}
      <section className="faq-section pt-130">
        <div className="container">
          <Tab.Container defaultActiveKey={"tab1"}>
            <div className="row">
              <div className="col-lg-5">
                <div className="faq-tabs-box mb-50 wow fadeInLeft">
                  <div className="faq-tabs">
                    <Nav as={"ul"} className="nav">
                      <Nav.Item as="li">
                        <Nav.Link
                          as="button"
                          className="nav-link"
                          data-bs-toggle="tab"
                          eventKey="tab1"
                        >
                          About Foods <i className="far fa-arrow-right" />
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link
                          as="button"
                          className="nav-link"
                          data-bs-toggle="tab"
                          eventKey="tab2"
                        >
                          Expert Chefs <i className="far fa-arrow-right" />
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link
                          as="button"
                          className="nav-link"
                          data-bs-toggle="tab"
                          eventKey="tab3"
                        >
                          Reservations <i className="far fa-arrow-right" />
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link
                          as="button"
                          className="nav-link"
                          data-bs-toggle="tab"
                          eventKey="tab4"
                        >
                          Return Policy <i className="far fa-arrow-right" />
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link
                          as="button"
                          className="nav-link"
                          data-bs-toggle="tab"
                          eventKey="tab5"
                        >
                          Payments method <i className="far fa-arrow-right" />
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="faq-content-box wow fadeInRight mb-50">
                  <Tab.Content className="tab-content">
                    <Tab.Pane className="tab-pane fade" eventKey="tab1">
                      <QichenAccordion />
                    </Tab.Pane>
                    <Tab.Pane className="tab-pane fade" eventKey="tab2">
                      <QichenAccordion defaultActive={2} />
                    </Tab.Pane>
                    <Tab.Pane className="tab-pane fade" eventKey="tab3">
                      <QichenAccordion defaultActive={3} />
                    </Tab.Pane>
                    <Tab.Pane className="tab-pane fade" eventKey="tab4">
                      <QichenAccordion defaultActive={4} />
                    </Tab.Pane>
                    <Tab.Pane className="tab-pane fade" eventKey="tab5">
                      <QichenAccordion defaultActive={5} />
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </div>
            </div>
          </Tab.Container>
        </div>
      </section>
      {/*====== End Faq Section ======*/}
      {/*====== Start Reservation Section ======*/}
      <section className="reservation-section pt-130 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="reservation-img wow fadeInLeft mb-50">
                <img src="assets/images/contact/contact-6.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 order-xl-2 order-3">
              <div className="reservation-content-box wow fadeInUp mb-50">
                <div className="section-title text-center mb-45">
                  <span className="sub-title">Booking table</span>
                  <h2>Make A Reservations</h2>
                </div>
                <div className="reservation-style-three">
                  <ReservationsFrom />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 order-xl-3 order-2">
              <div className="reservation-img wow fadeInRight mb-50">
                <img src="assets/images/contact/contact-7.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Partners />
    </Layout>
  );
};
export default FAQ;
