import React from 'react';
import './LogoMarquee.css'; // separate CSS file
import { Container } from 'react-bootstrap';
import { GiSewingString } from "react-icons/gi";
const marqueeText = [
  "Woven Tapes",
  "Woven Multi Colored Tapes",
  "Woven Lurex Elastics",
  "Woven Baloch Elastic",
];

const LogoMarquee = () => {
  return (
    <Container>
    <div className="container  py-3 overflow-hidden">
      <div className="text-track d-flex align-items-center">
        {marqueeText.concat(marqueeText).map((text, index) => (
          <span
            key={index}
            className="mx-4 "
            style={{ fontSize: "20px", whiteSpace: "nowrap", fontFamily:"Poppins" }}
          >
           <GiSewingString className='fs-3 mx-3 ' style={{color:"#CF3079"}} /> {text}
          </span>
        ))}
      </div>
    </div>
    </Container>
  );
};

export default LogoMarquee;
