import { IoSettings } from "react-icons/io5";
import { MdBorderColor } from "react-icons/md";
import { GiThreeLeaves } from "react-icons/gi";
import { GrCertificate } from "react-icons/gr";
import Img1 from '../assets/banner/image5.png';
import Img2 from '../assets/banner/image6.png';
import Img3 from '../assets/banner/image7.png';
import Img4 from '../assets/banner/image8.png';
import React from 'react'
import { useState } from "react";
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './OutProductRange.css';

const OutProductRange = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <Container>
                <div className='mx-4 d-flex flex-column flex-md-row gap-3 align-items-center justify-content-center' style={{ backgroundColor: "#ffffffff", padding: "20px" }}>
                    <div className='px-md-4 py-0 w-100 text-center text-md-start'>
                        <div className='d-flex my-2 justify-content-center'>
                            <h2 style={{ fontFamily: "Poppins", fontSize: "43px", fontWeight: "300", color: "#75CAD3" }}>Our Product Range</h2>
                        </div>
                        <h5 style={{ lineHeight: "37px", fontWeight: "300", fontSize: "18px" }}>
                            Our product portfolio is the result of our broad experience in manufacturing robust narrow fab, including long-term relationships with our clients. Our products are highly appreciated by our clients for their high durability and exceptional wear resistance. We are equipped with highly advanced computerized machines to design & manufacture custom-made products to meet each of our client’s unique requirements. We use superior grade raw material for manufacturing quality products. Take a glance on our product range and speak to us for customization, if required.</h5>
                    </div>
                </div>

                <div className="card-grid">
                    <div className="card-hover">
                        <div className="circle-wrapper">
                            <img src={Img1} alt="Woven Tapes" className="circle-image" />
                            <div className="hover-overlay">
                                <div className="overlay-content">
                                    <p>"We specialize in creating detailed woven tapes tailored to your needs."</p>
                                    <div className="text-center mt-3">
                                        <a href="#" className="explore-btn-animated">Explore →</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3 className="card-title">Woven Tapes</h3>
                    </div>

                    <div className="card-hover">
                        <div className="circle-wrapper">
                            <img src={Img2} alt="Woven Multi Colored" className="circle-image" />
                            <div className="hover-overlay">
                                <div className="overlay-content">
                                    <p>“We craft vibrant multi-colored tapes that blend style with durability for standout results.”</p>
                                    <div className="text-center mt-3">
                                        <a href="#" className="explore-btn-animated">Explore →</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3 className="card-title">Woven Multi Colored</h3>
                    </div>

                    <div className="card-hover">
                        <div className="circle-wrapper">
                            <img src={Img3} alt="Woven Multi Colored" className="circle-image" />
                            <div className="hover-overlay">
                                <div className="overlay-content">
                                    <p>“Elevate your designs with the sparkle and resilience of woven Lurex elastic.”</p>
                                    <div className="text-center mt-3">
                                        <a href="#" className="explore-btn-animated">Explore →</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3 className="card-title">Woven Lurex Elastic</h3>
                    </div>

                    <div className="card-hover">
                        <div className="circle-wrapper">
                            <img src={Img4} alt="Woven Multi Colored" className="circle-image" />
                            <div className="hover-overlay">
                                <div className="overlay-content text-center">
                                    <p>“Detailed. Distinctive. Designed to complement ethnic and couture creations.”</p>
                                    <div className="text-center mt-3">
                                        <a href="#" className="explore-btn-animated">Explore →</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3 className="card-title">Woven Baloch Ballet</h3>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default OutProductRange