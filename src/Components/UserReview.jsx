import { IoStar } from "react-icons/io5";
import { useEffect } from 'react';
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { BsHandbag } from "react-icons/bs";
import { Container, Row, Col } from 'react-bootstrap'
import './UserReview.css';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const UserReview = () => {
    const reviews = [
        {
            name: "Abhishek Bansal",
            company: "Ridaan Creation",
            rating: 5,
            title :"Exceptional Quality and Timely Delivery!",
            text: "We've placed multiple bulk orders in the past year, and Nimraj has never failed to deliver consistent quality. Their turnaround time is reliable and their support team is helpful. A solid choice for anyone in the apparel industry."

        },
        {
            name: "Sufiyan Y. Kagzi",
            company: "G. A. Kagzi",
            rating: 4.5,
            title:"Highly Responsive Team",
            text: "Nimraj Industries truly impressed us with the level of customization they offer. From width to color and pattern — everything was exactly as we needed. The finish and texture of the elastic was premium quality. Will definitely continue working with them."
        },
        {
            name: "Akansha Gupta",
            company: "Arhan Creation",
            rating: 5,
            title:"Trusted Partner for Garment Accessories",
            text: "As a designer brand, we often require intricate woven patterns — Nimraj has been a fantastic partner in helping us create unique elastic tapes that match our vision. Their team is professional and always ready to adapt."

        },
    ];
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
        return (
            <>
                {[...Array(fullStars)].map((_, i) => <FaStar key={`full-${i}`} color="#FFD700" />)}
                {halfStar && <FaStarHalfAlt color="#FFD700" />}
                {[...Array(emptyStars)].map((_, i) => <FaRegStar key={`empty-${i}`} color="#FFD700" />)}
            </>
        );
    };
    const NextArrow = ({ onClick }) => (
        <div className="user-custom-arrow next" onClick={onClick}><FaChevronRight /></div>
    );

    const PrevArrow = ({ onClick }) => (
        <div className="user-custom-arrow prev" onClick={onClick}><FaChevronLeft /></div>
    );
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        dotsClass: "user-slick-dots",
        responsive: [
            {
                breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1, }
            },
            {
                breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1, }
            },
            {
                breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, }
            }
        ]
    };
    return (
        <>
            <Container>
                <div className='m-4 text-center  ' >
                    <h2 style={{ fontFamily: "Poppins", fontSize: "43px", fontWeight: "300", marginRight: "8px" }}>What our</h2>
                    <h2 style={{ fontFamily: "Poppins", fontSize: "43px", fontWeight: "300", color: "#75CAD3" }}>Customer Says?</h2>
                </div>
                <div className="user-slider-wrapper ">
                    <Slider {...settings}>
                        {reviews.map((review, index) => (
                            <div className="user-slide-container" key={index}>
                                <div className="user-image-wrapper text-center border align-items-center px-3 py-5 my-2" style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)", borderRadius: "8px" }}>
                                    {/* <p className="mx-3 my-3 px-4" style={{ fontFamily: "Roboto", }}>“"Exceptional Quality and Timely Delivery!"
                                    We’ve been sourcing elastic tapes from <strong style={{ color: "#CF3079", fontWeight: "600" }}>Nimraj Industries</strong> for over a year now, and their commitment to quality has never wavered. The tapes are durable, well-finished, and customized exactly to our specifications. What stands out the most is their prompt customer service and on-time delivery — even on bulk orders. Highly recommend them for anyone in the garment or textile industry looking for reliable elastic solutions. ”</p> */}
                                    <h4 style={{fontFamily:"Poppins", fontSize:"22px", fontWeight:"300",color:"#CF3079"}}>{review.title}</h4>
                                    <p className="mx-3 my-3 px-4" style={{ fontFamily: "Roboto" }}>
                                        “{review.text}”
                                    </p>
                                    <h4 className="m-0 p-0" style={{ fontFamily: "Corinthia", fontSize: "37px", fontWeight: "800" }}>{review.name}</h4>
                                    <p className="m-0 p-0" style={{ fontFamily:"Amarante", fontSize: "24px", fontWeight: "400", color: "#004d56ff" }}>{review.company}</p>

                                    {/* <IoStar style={{ color: "#f5c826", fontSize: "20px" }} /><IoStar style={{ color: "#f5c826", fontSize: "20px" }} /><IoStar style={{ color: "#f5c826", fontSize: "20px" }} /><IoStar style={{ color: "#f5c826", fontSize: "20px" }} /><IoStar style={{ color: "#f5c826", fontSize: "20px" }} /> */}
                                    <div className="m-0 p-0">{renderStars(review.rating)}</div>

                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </Container>
        </>
    );
};
export default UserReview;
