import { Fragment, useEffect, useState } from "react";
import ImageView from "../components/ImageView";
import VideoPopup from "../components/VideoPopup";
import { animation } from "../utils";
import BackToTop from "./BackToTop";
import Footer from "./footer/Index";
import Header from "./headers/Index";

const Layout = ({ header, children, footer }) => {
  useEffect(() => {
    animation();
    // niceSelect();
  }, []);
  const [searchModal, setSearchModal] = useState(false);
  return (
    <Fragment>
      <VideoPopup />
      <ImageView />
      <Header header={2} openSearchModal={setSearchModal} />
      {children}
      <Footer footer={1} />
      <BackToTop />
    </Fragment>
  );
};
export default Layout;
