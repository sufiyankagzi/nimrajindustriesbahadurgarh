
import React from 'react'
import { IoMdPin } from "react-icons/io";
import { Container, Row, Col, } from 'react-bootstrap'
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import '../Footer/Footer.css'
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdMailOpen } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import GetInTouch from '../Components/GetInTouch';
import SocialSubscribe from '../Components/SocialSubscribe';
import LogoMarquee from '../Components/LogoMarquee';
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
      {/* <GetInTouch /> */}
      {/* <LogoMarquee /> */}
      {/* <SocialSubscribe /> */}
      <div className='mt-5' style={{ background:"#75CAD3" }}>
        {/* background: "linear-gradient(90deg,rgba(42, 170, 245, 1) 60%, rgba(83, 209, 237, 1) 100%)"  */}
        <Container >
          <div className='' >
            <Container >
              <Row className='m-0 p-0 py-3'>
                <Col md={3} className='m-0 p-4 text-white' >
                  <p className='text-dark' style={{ fontFamily: "Poppins", fontSize: "17px", fontWeight: "500", color: "black" }}>Our Services</p>
                  <ul className='m-1 p-0 list-unstyled hover-links'>
                    <li className='py-1' style={{ fontFamily: "Roboto", fontWeight: 300, cursor: "pointer" }}><IoMdArrowDropright className='me-2' /><Link to={"/"} style={{ textDecoration: "none", color: "#3b2f25ff",fontWeight:400 }}>Home</Link></li>
                    <li className='py-1' style={{ fontFamily: "Roboto", fontWeight: 300, cursor: "pointer" }}><IoMdArrowDropright className='me-2' /><Link to={"/aboutus"} style={{ textDecoration: "none", color: "#3b2f25ff",fontWeight:400 }}>About Us</Link></li>
                    <li className='py-1' style={{ fontFamily: "Roboto", fontWeight: 300, cursor: "pointer" }}><IoMdArrowDropright className='me-2' /><Link to={"/"} style={{ textDecoration: "none", color: "#3b2f25ff",fontWeight:400 }}>Products</Link></li>
                    <li className='py-1' style={{ fontFamily: "Roboto", fontWeight: 300, cursor: "pointer" }}><IoMdArrowDropright className='me-2' /><Link to={"/"} style={{ textDecoration: "none", color: "#3b2f25ff",fontWeight:400 }}>Best Sellers</Link></li>
                    <li className='py-1' style={{ fontFamily: "Roboto", fontWeight: 300, cursor: "pointer" }}><IoMdArrowDropright className='me-2' /><Link to={"/"} style={{ textDecoration: "none", color: "#3b2f25ff",fontWeight:400 }}>New Arrivals</Link></li>
                    <li className='py-1' style={{ fontFamily: "Roboto", fontWeight: 300, cursor: "pointer" }}><IoMdArrowDropright className='me-2' /><Link to={"/contactus"} style={{ textDecoration: "none", color: "#3b2f25ff" ,fontWeight:400}}>Contact Us</Link></li>
                  </ul>
                </Col>

                <Col md={3} className='m-0 p-4 text-white'>
                  <p className='text-dark' style={{ fontFamily: "Poppins", fontSize: "17px", fontWeight: "500" }}>Our Collections</p>
                  <ul className='m-1 p-0 list-unstyled hover-links'>
                    <li className='py-1' style={{ fontFamily: "Roboto", fontWeight: 300, cursor: "pointer" }}><IoMdArrowDropright className='me-2' /><Link to={"/"} style={{ textDecoration: "none", color: "#3b2f25ff",fontWeight:400 }}>Woven Tapes</Link></li>
                    <li className='py-1' style={{ fontFamily: "Roboto", fontWeight: 300, cursor: "pointer" }}><IoMdArrowDropright className='me-2' /><Link to={"/"} style={{ textDecoration: "none", color: "#3b2f25ff",fontWeight:400 }}>Woven Multi Colored Tapes</Link></li>
                    <li className='py-1' style={{ fontFamily: "Roboto", fontWeight: 300, cursor: "pointer" }}><IoMdArrowDropright className='me-2' /><Link to={"/"} style={{ textDecoration: "none", color: "#3b2f25ff",fontWeight:400 }}>Woven Lurex Elastic Tapes</Link></li>
                    <li className='py-1' style={{ fontFamily: "Roboto", fontWeight: 300, cursor: "pointer" }}><IoMdArrowDropright className='me-2' /><Link to={"/"} style={{ textDecoration: "none", color: "#3b2f25ff",fontWeight:400 }}>Woven Baloch Elastic Tapes</Link></li>
                  </ul>
                </Col>
                <Col md={3} className='m-0 p-4 text-white'>
                  <p className='text-dark' style={{ fontFamily: "Poppins", fontSize: "17px", fontWeight: "500" }}>About Nimraji Industries</p>
                  <ul className='m-1 p-0 list-unstyled'>
                    <li className='py-1' style={{ fontFamily: "Roboto", fontWeight: 300, cursor: "pointer", fontSize: "17px", lineHeight: "25px" }}><Link to={"/aboutus"} style={{ textDecoration: "none", color: "#3b2f25ff" }}>Nimraj Industries is an industry involved in manufacturing Elastic tapes & Webbings, based out of Bahadurgarh , Haryana. with continous modernisation of plant equipment.</Link></li>
                  </ul>
                </Col>
                <Col md={3} className='m-0 p-4 ' style={{ color: "black" }}>
                  <p className='text-dark' style={{ fontFamily: "Poppins", fontSize: "17px", fontWeight: "500" }}>Address</p>
                  <ul className='m-1 p-0 list-unstyled'>
                    <li className='py-1' style={{ fontFamily: "Roboto", fontWeight: 500, cursor: "pointer", lineHeight: "25px" }}><a
                      href="https://www.google.com/maps?q=Plot+No+45A,+Sector+17,+Footwear+Park,+HSIIDC,+Bahadurgarh,+Haryana+124507"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <IoMdPin className='me-2' />
                      Plot No: 45A, Sector-17, Footwear Park, HSIIDC, Bahadurgarh, Haryana - 124507
                    </a></li>
                    <li className='py-1 pt-3' style={{ fontFamily: "Roboto", fontWeight: 500, cursor: "pointer" }}><IoCall className='me-2' />
                      <a href="https://wa.me/918168356573?text=To,%0a*Nimraj%20Industries*%0a%0aHi%2C%20I%20want%20to%20know%20more%20about%20your%20products%0aPlease%20share%20your%20catalogue" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>+91 81683 56573</a></li>
                    <li className='py-0' style={{ fontFamily: "Roboto", fontWeight: 500, cursor: "pointer" }}>
                      <a href="mailto:info@nimrajindustries.com" style={{ textDecoration: "none", color: "inherit" }}><IoMdMailOpen className='me-2' />info@nimrajindustries.com</a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </div>
      <div style={{ background: "black" }}>
        <Row className='m-0'  >
          <Col className='d-flex align-items-center justify-content-center p-2'>
            <p className='m-0 p-1' style={{ fontFamily: "Poppins", fontWeight: 400, color: "white" }}>Copyright &copy; 2025 Nimraj Industries. All rights reserved.</p>
          </Col>
        </Row>
      </div>
    </>
  )
}
export default Footer