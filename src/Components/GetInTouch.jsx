import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { Container } from 'react-bootstrap'
import { GoMail } from "react-icons/go";
import { LiaMapMarkedSolid } from "react-icons/lia";
import { GiThreeLeaves } from "react-icons/gi";
import { CiMobile3 } from "react-icons/ci";
import './GetInTouch.css'; 
import emailjs from 'emailjs-com'; 
import { useState } from 'react'
const GetInTouch = () => {
    const [email, setEmail] = useState('');
    const[gmail,setGmail] = useState('aetapes@gmail.com')
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [inquiry, setInquiry] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(email);
        const templateParams = {
            gmail: gmail ,
            email:email,
            name:name,
            mobile:mobile,
            inquiry:inquiry,
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
            <Container >
                <div className='mx-4 my-1 d-flex flex-column flex-md-row gap-3 align-items-center justify-content-center' style={{ backgroundColor: "#ffffffff", padding: "20px" }}>
                    <div className='px-md-4 py-0 w-100 text-center text-md-start'>
                        <div className='d-flex my-2 justify-content-center'>
                            <h2 style={{ fontFamily: "Poppins", fontSize: "43px", fontWeight: "300", marginRight: "8px" }}>Get In</h2>
                            <h2 style={{ fontFamily: "Poppins", fontSize: "43px", fontWeight: "300", color: "#75CAD3" }}>Touch</h2>
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
            <Container>
                <div className='mx-4 d-flex flex-column flex-md-row gap-3 align-items-center justify-content-center' style={{ backgroundColor: "#ffffffff", padding: "20px" }}>
                    <div className='w-100 h-100 p-3 text-center border-1 rounded' style={{ border: "1px solid #75CAD3" }}>
                        <CiMobile3 className="fs-1 pt-1 flip" style={{ color: "#75CAD3" }} />
                        <h3 className="pt-3" style={{ fontFamily: "Poppins", fontSize: "20px", fontWeight: "500", color: "#7b7b7bff" }}>
                            Contacts
                        </h3>
                        <p className='m-0 p-0' style={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: "400", color: "#555" }}>
                            <a className='text-hover' href="https://wa.me/918168356573?text=To,%0a*Nimraj%20Industries*%0a%0aHi%2C%20I%20want%20to%20know%20more%20about%20your%20products%0aPlease%20share%20your%20catalogue" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>+91 81683 56573</a>
                        </p>
                        <p className='m-0 p-0' style={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: "400", color: "#555" }}>
                            <a className='text-hover' href="https://wa.me/918700256678?text=To,%0a*Nimraj%20Industries*%0a%0aHi%2C%20I%20want%20to%20know%20more%20about%20your%20products%0aPlease%20share%20your%20catalogue" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>+91 87002 56678</a>
                        </p>

                    </div>
                    <div className='w-100 h-100 p-3 text-center border-1 rounded' style={{ border: "1px solid #75CAD3" }}>
                        <GoMail className="fs-1 pt-1 flip" style={{ color: "#75CAD3" }} />
                        <h3 className="pt-3" style={{ fontFamily: "Poppins", fontSize: "20px", fontWeight: "500", color: "#7b7b7bff" }}>
                            E-mail
                        </h3>
                        <p className='m-0 p-0' style={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: "400", color: "#555" }}>
                            <a className='text-hover' href="mailto:info@nimrajindustries.com" style={{ textDecoration: "none", color: "inherit" }}>info@nimrajindustries.com</a>
                        </p>
                        <p className='m-0 p-0' style={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: "400", color: "#555" }}>
                            <a className='text-hover' href="mailto:info@nimrajindustries.com" style={{ textDecoration: "none", color: "inherit" }}>sales@nimrajindustries.com</a>
                        </p>
                    </div>
                    <div className='w-100 h-100 p-3 text-center border-1 rounded' style={{ border: "1px solid #75CAD3" }}>
                        <LiaMapMarkedSolid className="fs-1 pt-1 flip" style={{ color: "#75CAD3" }} />
                        <h3 className="pt-3" style={{ fontFamily: "Poppins", fontSize: "20px", fontWeight: "500", color: "#7b7b7bff" }}>
                            Address
                        </h3>
                        <p className='m-0 p-0 text-hover' style={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: "400", color: "#555" }}>
                            <a className='text-hover' href="https://www.google.com/maps?q=Plot+No+45A,+Sector+17,+Footwear+Park,+HSIIDC,+Bahadurgarh,+Haryana+124507"
                                target="_blank"
                                rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>Plot No: 45A, Sector-17, Footwear Park, HSIIDC, Bahadurgarh, Haryana - 124507</a>
                        </p>

                    </div>
                </div>
            </Container>
            <Container>
                <div className='d-flex flex-column flex-md-row mx-4 px-4 my-4 gap-4'>
                    <div style={{ flex: 1 }}>
                        <div style={{ position: "relative", width: "100%", height: "500px" }}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.109240213226!2d76.87589077533876!3d28.71628117561903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d06a415555555%3A0x200c48c001c9e0c2!2sAbhishek%20Enterprises!5e0!3m2!1sen!2sin!4v1752807872148!5m2!1sen!2sin" width="100%" height="500" style={{ border: "1px solid #ccc", borderRadius: "0px" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            <a href="https://www.google.com/maps?q=Plot+No+45A,+Sector+17,+Footwear+Park,+HSIIDC,+Bahadurgarh,+Haryana+124507" target="_blank" rel="noopener noreferrer" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 2, backgroundColor: "transparent", cursor: "pointer", }}></a>
                        </div>
                    </div>
                    <div style={{ flex: 1 }}>
                        <form className='p-3 border ' onSubmit={sendEmail} style={{ backgroundColor: "#ffffffff" }}>
                            <div className='d-flex justify-content-center  ' >
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
                                <button type="reset" onClick={() => {
                                    setName('');
                                    setEmail('');
                                    setMobile('');
                                    setInquiry('');
                                    setMessage('');
                                }} className="explore-btn-animated border-0">Reset</button>
                                {message && <div style={{ marginTop: "10px", color: "#28a745" }}>{message}</div>}
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default GetInTouch