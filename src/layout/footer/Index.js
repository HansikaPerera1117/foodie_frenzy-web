import DefaultFooter from "./DefaultFooter";
import Footer1 from "./Footer1";
const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
      return <Footer1 />;
    default:
      return <Footer1 />;
  }
};
export default Footer;
