import { Container, Col, Row } from "react-bootstrap";
import { IoLocationOutline } from "react-icons/io5";
import { VscMail } from "react-icons/vsc";
import NavbarMain from "../Components/Navbar";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import '../Header/Header.css';
const Header = () => {
  return (
    <>
      <Container fluid className="m-0 p-0" style={{ background:"#75CAD3"  }}>  {/* background: "linear-gradient(90deg,rgba(42, 170, 245, 1) 60%, rgba(83, 209, 237, 1) 100%)" */}
        <Row className="m-0 p-1 justify-content-center d-sm-flex" style={{ fontFamily: "Roboto", fontSize: "13px", fontWeight: "300" }}>
          <Col md={4} className="m-0 p-1 align-items-center text-center text-white position-relative ">
            <Row className="m-0 p-0 justify-content-centerflex-wrap">
              <Col className="mx-4 p-0 py-1 d-flex justify-content-start justify-content-center justify-content-md-start align-items-center text-dark flex-wrap text-center" style={{ cursor: "pointer" }}>
                <IoLocationOutline className="mx-2 fs-6" /><span className="login-details" style={{ fontWeight: "500" }}>Location</span>
                <VscMail className="mx-2 fs-6" /><span onClick={() => { setIsOpen(false); logout() }} style={{ fontWeight: "500" }}>info@nimrajindustries.com</span>
              </Col>
            </Row>
          </Col>
          <Col md={4} className="m-0 p-0 d-flex align-items-center text-center justify-content-center text-dark position-relative  ">
            <span className="m-0 p-0" style={{ fontWeight: "500" }}>INDIA'S LARGEST NARROW FABRICS MANUFACTURERS</span>
          </Col>
          <Col md={4} className="m-0 p-1 d-none d-md-flex align-items-center justify-content-end text-dark gap-2" style={{ cursor: "pointer" }}>
            <a href="https://www.facebook.com/" target="_blank"  rel="noopener noreferrer"><FaFacebookF className='head-social-icon-facebook text-dark' style={{}} /></a>
            <a href="https://www.instagram.com/" target="_blank"  rel="noopener noreferrer"><FaInstagram className='head-social-icon-instagram text-dark' /></a>
            <a href="https://www.youtube.com/" target="_blank"  rel="noopener noreferrer"><FaYoutube className='head-social-icon-youtube text-dark' /></a>
            <a href="https://wa.me/918168356573?text=To,%0a*Nimraj%20Industries*%0a%0aHi%2C%20I%20want%20to%20know%20more%20about%20your%20products%0aPlease%20share%20your%20catalogue" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}><FaWhatsapp className='head-social-icon-whatsapp text-dark' /></a>
            <a href="https://www.twitter.com/" target="_blank"  rel="noopener noreferrer"><IoLogoTwitter className='head-social-icon-twitter text-dark' /></a>
          </Col>
        </Row>
      </Container>
      <NavbarMain />
    </>
  )
}
export default Header;