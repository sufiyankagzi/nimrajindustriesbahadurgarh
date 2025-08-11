import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // ✅ NEW
import { Container } from 'react-bootstrap';
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import './SocialSubscribe.css';

const SocialSubscribe = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(email);
        const templateParams = {
            email: email // Replace with your recipient email
        };

        emailjs.send(
            'service_jefoglf',
            'template_eclinzn',
            templateParams,
            '1qvXbmOH7RhhkL3Yx'
        ).then((res) => {
            setMessage('✅ Thank you! Email sent.');
            setEmail('');
        }).catch((err) => {
            setMessage('❌ Failed to send email.');
            console.error(err);
        });
    };
    return (
        <>
            <Container>
                <div className='mx-4 d-flex flex-column flex-md-row gap-3 align-items-center justify-content-center' style={{ backgroundColor: "#ffffffff", padding: "20px" }}>
                    {/* Social Media Column */}
                    <div className='w-100 h-100 p-3 text-center ' style={{ borderRight: "1px solid #75CAD3" }}>
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

                    {/* Subscribe Column */}
                    <div className='w-100 h-100 p-3 text-center ' >
                        <div className='d-flex my-2 justify-content-center'>
                            <h2 style={{ fontFamily: "Poppins", fontSize: "30px", fontWeight: "300", marginRight: "8px" }}>Subscribe to</h2>
                            <h2 style={{ fontFamily: "Poppins", fontSize: "30px", fontWeight: "300", color: "#75CAD3" }}>Our Newsletter</h2>
                        </div>
                        <div className="mx-1 mt-4">
                            <form
                                className="d-flex position-relative"
                                onSubmit={sendEmail}
                                style={{ maxWidth: "100%" }}
                            >
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="form-control rounded-0 ps-3 pe-5"
                                    style={{
                                        fontFamily: "Roboto",
                                        fontSize: "15px",
                                        padding: "10px 16px",
                                        border: "1px solid #ccc",
                                        backgroundColor: "#f9f9f9",
                                    }}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />

                                <button
                                    type="submit"
                                    className="btn position-absolute end-0 top-0 rounded-0"
                                    style={{
                                        height: "100%",
                                        background: "linear-gradient(90deg, rgba(42, 170, 245, 1) 60%, rgba(83, 209, 237, 1) 100%)",
                                        borderRadius: "30px",
                                        color: "#000",
                                        fontWeight: "bold",
                                        padding: "0 16px",
                                    }}
                                >
                                    <IoIosArrowRoundForward className="fs-4 text-light" />
                                </button>
                            </form>

                            {message && <div style={{ marginTop: "10px", color: "#28a745" }}>{message}</div>}
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default SocialSubscribe;
