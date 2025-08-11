import React from 'react';
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from '../assets/banner/image1.png';
import Img2 from '../assets/banner/image2.png';
import Img3 from '../assets/banner/image3.png';
import Img4 from '../assets/banner/image4.png';
import './MainPageSlider.css';

const MainPageSlider = () => {
    const NextArrow = ({ onClick }) => (
        <div className="custom-arrow next" onClick={onClick}>
            <FaChevronRight />
        </div>
    );

    const PrevArrow = ({ onClick }) => (
        <div className="custom-arrow prev" onClick={onClick}>
            <FaChevronLeft />
        </div>
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="slider-wrapper">
            <Slider {...settings}>
                <div>
                    <div className="slide-container">
                        <img src={Img1} alt="Slide 1" className="slide-image" />
                        <div className="slide-text2">
                            <h2 className='text-dark'>From the Narrowest Threads.</h2>
                            <p className='text-info'>Bold Textiles. Beautiful Possibilities.</p>
                            <button className="slide-button2">View All</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="slide-container">
                        <img src={Img2} alt="Slide 2" className="slide-image" />
                        <div className="slide-text3">
                            <h2>Trusted Worldwide. </h2>
                            <p className='text-light'>Crafted at Nimraj.</p>
                            <button className="slide-button3">Explore Now</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="slide-container">
                        <img src={Img3} alt="Slide 3" className="slide-image" />
                        <div className="slide-text1">
                            <h2>Slim Threads. Strong Impact.</h2>
                            <p>Eco-Luxe by Nimraj.</p>
                            <button className="slide-button1">View All</button>
                        </div>
                    </div>
                </div>
                
            </Slider>
        </div>
    );
};

export default MainPageSlider;
