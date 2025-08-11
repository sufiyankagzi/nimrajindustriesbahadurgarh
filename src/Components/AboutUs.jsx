import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Img1 from '../assets/banner/image9.png';
import './AboutUs.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
const AboutUs = () => {
    const taglines = [
        "A New Idea Inspires Us to Weave Greatness.",
        "Innovation Threads Every Inch of Our Fabric.",
        "Great Work Begins with a Single Thread of Inspiration.",
        "From Inspired Ideas to Impeccable Weaves.",
        "Weaving Big Dreams from Narrow Fabrics.",
        "Inspired by Ideas. Defined by Craft."
    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % taglines.length);
        }, 3000); // Change tagline every 3 seconds
        return () => clearInterval(interval);
    }, []);
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
                <Row className="p-3 m-0" style={{ background: "#75CAD3"  }}>{/* "linear-gradient(90deg, rgba(42, 170, 245, 1) 60%, rgba(83, 209, 237, 1) 100%)", */}
                    
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-start mb-2 mb-md-0">
                        <h3 className="m-0" style={{ fontFamily: "Poppins", color: "black", fontSize: "25px", fontWeight: "300", }}>About Our Company</h3>
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-md-end justify-content-start text-dark">
                        <Breadcrumb className="m-0" style={{ backgroundColor: "transparent" }}>
                            <Breadcrumb.Item href="/" className="text-dark">
                                Home
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active className="text-dark">
                                About Us
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>

                </Row>
                <div className='d-flex my-2 px-5 py-3'>
                    <h2 style={{ fontFamily: "Poppins", fontSize: "33px", fontWeight: "300", marginRight: "8px" }}>Nimraj</h2>
                    <h2 style={{ fontFamily: "Poppins", fontSize: "33px", fontWeight: "300", color: "#75CAD3" }}>Industries</h2>
                </div>
                <div className='my-1 px-5 pb-4'>
                    <p style={{fontFamily:"Roboto", fontWeight:"300", lineHeight:"30px"}}><strong style={{ color: "#CF3079", fontWeight: "600" }}>Nimraj Industries</strong> is the flagship company of Nimraj group and was founded in 2025, Bahadurgarh, Haryana, manufacturing Elastic tapes & Webbings, based in India at Delhi and Haryana. Being marketed under the brand name <strong>NIMRAJ</strong> with continuous modernization of plant equipment, <strong style={{ color: "#CF3079", fontWeight: "600" }}>Nimraj Industries</strong> has grown to become a leading manufacturer globally. Our strength lies in our quality, commitment and vast experience to produce customized products to fulfil the requirement of our customers to best of our capabilities. With a well-built manufacturing base and excellent process, we aspire to outshine in providing inventive products through our experience in this sector.</p>
                    <p style={{fontFamily:"Roboto", fontWeight:"300", lineHeight:"30px"}}>Our goal is to provide customers with a diverse product range while upholding the highest standards of quality.</p>
                    <p style={{fontFamily:"Roboto", fontWeight:"300", lineHeight:"30px"}}>Our facility is equipped with advanced computerized and mechanical machinery to manufacture a wide range of products, including woven elastic (3mm to 500mm), knitted elastic (2mm to 600mm), braided elastic (1mm to 15mm), cords, tapes, and webbings. We ensure customization in color, width, and design to meet each customer's specific requirements.</p>
                    <p style={{fontFamily:"Roboto", fontWeight:"300", lineHeight:"30px"}}>With cutting-edge computerized and mechanical equipment, we produce woven, knitted, and braided elastics in a wide range of sizes — from 1mm to 600mm — along with cords, tapes, and webbings. We offer complete customization in color, width, and design as per customer specifications.</p>
                    <p style={{fontFamily:"Roboto", fontWeight:"300", lineHeight:"30px"}}>We look forward to building a strong and lasting business relationship with you.</p>
                </div>

                <div className='d-flex my-0 px-5 py-0'>
                    <h2 style={{ fontFamily: "Poppins", fontSize: "33px", fontWeight: "300", marginRight: "8px" }}>Beyond Business</h2>
                    <h2 style={{ fontFamily: "Poppins", fontSize: "33px", fontWeight: "300", color: "#75CAD3" }}>Our Social Promise</h2>
                </div>
                <div className='my-1 px-5 pb-4'>
                    <p style={{fontFamily:"Roboto", fontWeight:"300", lineHeight:"30px"}}>We understand the importance of what nature and society provide us, and we strive to give back through multiple impactful activities.</p>
                    <p style={{fontFamily:"Roboto", fontWeight:"300", lineHeight:"30px"}}>Grateful for all that nature and society offer, we actively engage in initiatives that contribute positively in return.</p>
                    <p style={{fontFamily:"Roboto", fontWeight:"300", lineHeight:"30px"}}>Through our in-house training center, <strong style={{ color: "#CF3079", fontWeight: "600" }}>Nimraj Industries</strong> provides skill development opportunities to rural women and underprivileged youth, helping them build a sustainable livelihood.</p>
                    <p style={{fontFamily:"Roboto", fontWeight:"300", lineHeight:"30px"}}>We take pride in having created a self-sustained green belt around our premises by planting numerous trees and plants over time.</p>
                </div>

                <div className='d-flex my-0 px-5 py-0'>
                    <h2 style={{ fontFamily: "Poppins", fontSize: "33px", fontWeight: "300", marginRight: "8px" }}>Crafted in Color,</h2>
                    <h2 style={{ fontFamily: "Poppins", fontSize: "33px", fontWeight: "300", color: "#75CAD3" }}>Styled in Design</h2>
                </div>
                <div className='my-1 px-5 pb-4'>
                    <p style={{fontFamily:"Roboto", fontWeight:"300", lineHeight:"30px"}}>We offer complete customization in colors and designs, while giving prime importance to packaging and packing tailored to each client’s requirements. Our setup is equipped to meet a wide range of size and design specifications.</p>
                    <p style={{fontFamily:"Roboto", fontWeight:"300", lineHeight:"30px"}}>Backed by a team of dedicated experts, we maintain a professional approach and strict quality controls to ensure timely, cost-effective service. This commitment has helped us build lasting trust and loyalty among our clients.</p>
                    <p style={{fontFamily:"Roboto", fontWeight:"300", lineHeight:"30px"}}>With a focus on quality, professionalism, and punctuality, our expert team consistently delivers value-driven solutions—resulting in strong customer satisfaction and long-term brand loyalty.</p>
                </div>
            </Container>
        </>
    )
}
export default AboutUs