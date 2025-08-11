import { Row, Col, Container } from 'react-bootstrap'
import Img1 from '../assets/banner/image9.png';
import './ContactUs.css';
import { useEffect } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { GoMail } from "react-icons/go";
import { LiaMapMarkedSolid } from "react-icons/lia";
import { GiThreeLeaves } from "react-icons/gi";
import { CiMobile3 } from "react-icons/ci";
import emailjs from 'emailjs-com';
import { useState } from 'react'
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdMailOpen } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { IoMdPin } from "react-icons/io";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";


const ContactUs = () => {
    const taglines = [
        "A New Idea Inspires Us to Weave Greatness.", "Innovation Threads Every Inch of Our Fabric.", "Great Work Begins with a Single Thread of Inspiration.", "From Inspired Ideas to Impeccable Weaves.", "Weaving Big Dreams from Narrow Fabrics.", "Inspired by Ideas. Defined by Craft."
    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % taglines.length);
        }, 3000); // Change tagline every 3 seconds
        return () => clearInterval(interval);
    }, []);

    const [email, setEmail] = useState('');
    const [gmail, setGmail] = useState('aetapes@gmail.com')
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [inquiry, setInquiry] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(email);
        const templateParams = {
            gmail: gmail,
            email: email,
            name: name,
            mobile: mobile,
            inquiry: inquiry,
        };

        emailjs.send(
            'service_jefoglf',
            'template_9o1yngj',
            templateParams,
            '1qvXbmOH7RhhkL3Yx'
        ).then((res) => {
            setMessage('✅ Thank you! Email sent.');
            // setEmail('');
        }).catch((err) => {
            setMessage('❌ Failed to send email.');
            console.error(err);
        });
    };
    return (
        <>
            <div className="hero-container position-relative text-center">
                <img src={Img1} alt="About Us" className="hero-img" />
                <div className="overlay"></div>
                <div className="hero-text position-absolute top-50 start-50 translate-middle">
                    <h1 key={index} className="animated-text fade-in">
                        {taglines[index]}
                    </h1>
                </div>
            </div>
            <Container className="about-container p-0" style={{background:"linear-gradient(to right, #fef4d6ff, #ffffff)"}}>
                <Row className="p-3 m-0"  style={{ background: "#75CAD3"  }}>
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-start mb-2 mb-md-0">
                        <h3 className="m-0" style={{ fontFamily: "Poppins", color: "black", fontSize: "25px", fontWeight: "300", }}>Contact Us</h3>
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-md-end justify-content-start">
                        <Breadcrumb className="m-0" style={{ backgroundColor: "transparent" }}>
                            <Breadcrumb.Item href="/" className="text-dark">
                                Home
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active className="text-dark">
                                Contact Us
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
                {/* FOR CONTACT US DETAILS */}
                <Container style={{background:"transparant"}}>
                    <div className='mx-4 my-1 d-flex flex-column flex-md-row gap-3 align-items-center justify-content-center' style={{ backgroundColor: "transparent", padding: "20px" }}>
                        <div className='px-md-4 py-0 w-100 text-center text-md-start'>
                            <div className='d-flex my-2 justify-content-center'>
                                <h2 style={{ fontFamily: "Poppins", fontSize: "43px", fontWeight: "300", marginRight: "8px" }}>Contact</h2>
                                <h2 style={{ fontFamily: "Poppins", fontSize: "43px", fontWeight: "300", color: "#75CAD3" }}>Us</h2>
                            </div>
                            <div className='text-center'>
                                <h5 style={{ lineHeight: "37px", fontWeight: "300", fontSize: "18px" }}>
                                    Have questions about our products? We’d love to help.
                                </h5>
                                <h5 style={{ lineHeight: "37px", fontWeight: "300", fontSize: "18px" }}>
                                    Please fill out the below contact form with your information and let us know how we can best serve your needs.
                                </h5>
                                <h5 style={{ lineHeight: "37px", fontWeight: "300", fontSize: "18px" }}>
                                    Or write to us at <strong>contact@nimrajindustries.com</strong>
                                </h5>
                            </div>
                        </div>
                    </div>
                </Container>
                <Container className='pb-4' >
                    <div className='d-flex flex-column flex-md-row mx-4 px-4 my-2 gap-4' style={{background:"transparant"}}>
                        <div style={{ flex: 1 }} className='m-0 p-0 border'>
                            <div className='d-flex my-0 pt-5 px-3 pb-0 justify-content-center'>
                                <h2 className='m-0 p-0' style={{ fontFamily: "Poppins", fontSize: "33px", fontWeight: "300", marginRight: "8px" }}>Nimraj&nbsp;</h2>
                                <h2 className='m-0 p-0' style={{ fontFamily: "Poppins", fontSize: "33px", fontWeight: "300", color: "#75CAD3" }}>Industries</h2>
                            </div>

                            <div className='my-1 px-5 py-3 text-center'>
                                <ul className='m-1 p-0 list-unstyled'>
                                    <li className='py-1' style={{ fontFamily: "Roboto", fontWeight: 400, cursor: "pointer", lineHeight: "25px" }}>
                                       <strong>-: Address :-</strong>
                                    </li>
                                    <li className='py-1' style={{ fontFamily: "Roboto", fontWeight: 400, cursor: "pointer", lineHeight: "25px" }}>
                                        <a href="https://www.google.com/maps?q=Plot+No+45A,+Sector+17,+Footwear+Park,+HSIIDC,+Bahadurgarh,+Haryana+124507" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}><IoMdPin className='me-2' />Plot No: 45A, Sector-17,</a>
                                    </li>
                                    <li className='py-1' style={{ fontFamily: "Roboto", fontWeight: 400, cursor: "pointer", lineHeight: "25px" }}>
                                        <a href="https://www.google.com/maps?q=Plot+No+45A,+Sector+17,+Footwear+Park,+HSIIDC,+Bahadurgarh,+Haryana+124507" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Footwear Park, HSIIDC,</a>
                                    </li>
                                    <li className='py-1 pb-4' style={{ fontFamily: "Roboto", fontWeight: 400, cursor: "pointer", lineHeight: "25px" }}>
                                        <a href="https://www.google.com/maps?q=Plot+No+45A,+Sector+17,+Footwear+Park,+HSIIDC,+Bahadurgarh,+Haryana+124507" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}><strong>Bahadurgarh,</strong> Haryana - 124507 (INDIA)</a>
                                    </li>
                                    <li className='py-1 ' style={{ fontFamily: "Roboto", fontWeight: 400, cursor: "pointer" }}><IoCall className='me-2' />
                                        <a href="https://wa.me/918168356573?text=To,%0a*Nimraj%20Industries*%0a%0aHi%2C%20I%20want%20to%20know%20more%20about%20your%20products%0aPlease%20share%20your%20catalogue" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>+91 81683 56573</a></li>
                                    <li className='py-1' style={{ fontFamily: "Roboto", fontWeight: 400, cursor: "pointer" }}>
                                        <a href="mailto:info@nimrajindustries.com" style={{ textDecoration: "none", color: "inherit" }}><IoMdMailOpen className='me-2' />info@nimrajindustries.com</a>
                                    </li>
                                    <li className='py-1' style={{ fontFamily: "Roboto", fontWeight: 400, cursor: "pointer" }}>
                                        <a href="https://www.nimrajindustries.com" style={{ textDecoration: "none", color: "inherit" }}><IoMdMailOpen className='me-2' />www.nimrajindustries.com</a>
                                    </li>
                                </ul>

                                {/* Social Media Column */}
                                <div className='w-100 h-100 p-3 text-center ' >
                                    <div className='d-flex my-2 justify-content-center'>
                                        <h2 style={{ fontFamily: "Poppins", fontSize: "30px", fontWeight: "300", marginRight: "8px" }}>Our</h2>
                                        <h2 style={{ fontFamily: "Poppins", fontSize: "30px", fontWeight: "300", color: "#75CAD3" }}>Social Media</h2>
                                    </div>
                                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebookF className='social-icon-facebook' /></a>
                                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram className='social-icon-instagram' /></a>
                                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><FaYoutube className='social-icon-youtube' /></a>
                                    <a href="https://wa.me/918168356573?text=To,%0a*Nimraj%20Industries*%0a%0aHi%2C%20I%20want%20to%20know%20more%20about%20your%20products%0aPlease%20share%20your%20catalogue" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}><FaWhatsapp className='social-icon-whatsapp' /></a>
                                    <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><IoLogoTwitter className='social-icon-twitter' /></a>
                                </div>
                            </div>
                        </div>
                        <div style={{ flex: 1, background:"transparant" }}>
                            <form className='px-3 pt-5 pb-5 border ' onSubmit={sendEmail} >
                                <div className='d-flex justify-content-center  '  >
                                    <h2 style={{ fontFamily: "Poppins", fontSize: "28px", fontWeight: "300", marginRight: "8px" }}>Send Us</h2>
                                    <h2 style={{ fontFamily: "Poppins", fontSize: "28px", fontWeight: "300", color: "#75CAD3" }}>Your Inquiry</h2>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="name" style={{ fontFamily: "Roboto", fontSize: "15px", fontWeight: "600" }}>Name</label>
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control rounded-0" id="name" placeholder="Enter Name" required style={{ fontFamily: "Roboto", fontSize: "15px" }} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="name" style={{ fontFamily: "Roboto", fontSize: "15px", fontWeight: "600" }}>E-mail</label>
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control rounded-0" id="email" placeholder="Enter E-mail" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="name" style={{ fontFamily: "Roboto", fontSize: "15px", fontWeight: "600" }}>Mobile No.</label>
                                    <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} className="form-control rounded-0" id="mobileno" placeholder="Enter Mobile No." required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="name" style={{ fontFamily: "Roboto", fontSize: "15px", fontWeight: "600" }}>Inquiry Message</label>
                                    <textarea value={inquiry} onChange={(e) => setInquiry(e.target.value)} className="form-control rounded-0" id="message" rows="3" placeholder="Enter message..." required></textarea>
                                </div>
                                <div className="d-flex justify-content-center gap-4  mt-3">
                                    <button type="submit" className="explore-btn-animated border-0">Send</button>
                                    <button type="reset" onClick={() => { setName(''); setEmail(''); setMobile(''); setInquiry(''); setMessage(''); }} className="explore-btn-animated border-0">Reset</button>
                                    {message && <div style={{ marginTop: "10px", color: "#28a745" }}>{message}</div>}
                                </div>
                            </form>
                        </div>
                    </div>
                </Container>
            </Container>
        </>
    )
}
export default ContactUs