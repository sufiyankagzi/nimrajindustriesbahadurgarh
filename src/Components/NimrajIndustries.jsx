import { IoSettings } from "react-icons/io5";
import { MdBorderColor } from "react-icons/md";
import { GiThreeLeaves } from "react-icons/gi";
import { GrCertificate } from "react-icons/gr";
import { Container } from 'react-bootstrap'
import Img1 from '../assets/banner/nimrajnew.png';
import './Nimraj.css'
import OutProductRange from "./OutProductRange";
import { Link } from "react-router-dom";
const NimrajIndustries = () => {
  return (
    <>
      <Container>
        <div className='m-4 d-flex flex-column flex-md-row gap-3 align-items-center justify-content-center' style={{ backgroundColor: "#ffffffff", padding: "20px" }}>
          <div className='px-md-4 py-0 w-100 text-center text-md-start'>
            <div className='d-flex my-2'>
              <h2 style={{ fontFamily: "Poppins", fontSize: "43px", fontWeight: "300", marginRight: "8px" }}>Nimraj</h2>
              <h2 style={{ fontFamily: "Poppins", fontSize: "43px", fontWeight: "300", color: "#75CAD3" }}>Industries</h2>
            </div>
            <h5 style={{ lineHeight: "37px", fontWeight: "300", fontSize: "18px" }}>
              Founded in 2025, <strong style={{ color: "# ", fontWeight: "600" }}>Nimraj Industries</strong> is an industry involved in manufacturing Elastic tapes & Webbings, based out of Bahadurgarh , Haryana. with continous modernisation of plant equipment, Nimraj Industries has grown to become one of the leading manufacturers in the country. Our strength lies in our quality commitment and vast experience to produce and fulfil the requirements of our customers to the best of our capabilities.
            </h5>
            <div className="text-start  mt-3">
              <Link to={"/aboutus"} className="explore-btn-animated">Explore →</Link>
              {/* <a href="#" className="explore-btn-animated">Explore →</a> */}
            </div>
          </div>
          <div className='w-100 h-100 text-center'>
            <img src={Img1} alt="Banner1" className='img-fluid' style={{width:"400px", borderRadius:"50%",boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)"}} />
          </div>
        </div>
      </Container>

      <Container>
        <div className='mx-4 d-flex flex-column flex-md-row gap-3 align-items-center justify-content-center' style={{ backgroundColor: "#ffffffff", padding: "20px" }}>
          <div className='px-md-4 py-0 w-100 text-center text-md-start'>
            <div className='d-flex my-2 justify-content-center'>
              <h2 style={{ fontFamily: "Poppins", fontSize: "43px", fontWeight: "300", color: "#75CAD3" }}>"Advanced Materials. Seamless Integration."</h2>
            </div>
            <h5 style={{ lineHeight: "37px", fontWeight: "300", fontSize: "18px" }}>
              With the continuous advancing technologies, <strong style={{ color: "#CF3079", fontWeight: "600" }}>Nimraj Industries</strong>  develop fabrics that provide design comfortability, and improved strength. We have the most modern state-of-the-art computer systems that give an appropriate formula for achieving the least possible metamerism effect. We are into manufacturing and supplying webbings, tapes, elastics and various kinds of garment accessories, retail products for our clients.</h5>
          </div>
        </div>
        <div className='mx-4 d-flex flex-column flex-md-row gap-3 align-items-center justify-content-center' style={{ backgroundColor: "#ffffffff", padding: "20px" }}>
          <div className='w-100 h-100 p-3 text-center border-1 rounded' style={{ border: "1px solid #75CAD3" }}>
            <IoSettings className="fs-1 pt-1" style={{ color: "#75CAD3" }} />
            <h3 className="pt-3" style={{ fontFamily: "Poppins", fontSize: "24px", fontWeight: "400", color: "#7b7b7bff" }}>
              Custom Designing
            </h3>
            <p style={{ fontFamily: "Poppins", fontSize: "13px", fontWeight: "300", color: "#555" }}>
              "We specialize in developing products with intricate designs, tailored precisely to meet each customer’s unique requirements."
            </p>
          </div>
          <div className='w-100 h-100 p-3 text-center border-1 rounded' style={{ border: "1px solid #75CAD3" }}>
            <MdBorderColor className="fs-1 pt-1" style={{ color: "#75CAD3" }} />
            <h3 className="pt-3" style={{ fontFamily: "Poppins", fontSize: "24px", fontWeight: "400", color: "#7b7b7bff" }}>
              Vast Production
            </h3>
            <p style={{ fontFamily: "Poppins", fontSize: "13px", fontWeight: "300", color: "#555" }}>
              "Producing over 5,00,000 metres every day, we ensure timely delivery for high-volume orders without compromising on quality."
            </p>
          </div>

          <div className='w-100 h-100 p-3 text-center border-1 rounded' style={{ border: "1px solid #75CAD3" }}>
            <GiThreeLeaves className="fs-1 pt-1" style={{ color: "#75CAD3" }} />
            <h3 className="pt-3" style={{ fontFamily: "Poppins", fontSize: "24px", fontWeight: "400", color: "#7b7b7bff" }}>
              Quality That Speaks
            </h3>
            <p style={{ fontFamily: "Poppins", fontSize: "13px", fontWeight: "300", color: "#555" }}>
              "Every elastic and tape we produce aligns with international quality benchmarks to ensure complete customer satisfaction."
            </p>
          </div>

          <div className='w-100 h-100 p-3 text-center border-1 rounded' style={{ border: "1px solid #75CAD3" }}>
            <GrCertificate className="fs-1 pt-1" style={{ color: "#75CAD3" }} />
            <h3 className="pt-3" style={{ fontFamily: "Poppins", fontSize: "24px", fontWeight: "400", color: "#7b7b7bff" }}>
              OEKO-TEX® Certified
            </h3>
            <p style={{ fontFamily: "Poppins", fontSize: "13px", fontWeight: "300", color: "#555" }}>
              "We meet OEKO-TEX® criteria, reflecting our commitment to eco-conscious and skin-safe textiles, assuring purity, safety, and comfort."
            </p>
          </div>
        </div>
        <OutProductRange />
      </Container>
    </>
  )
}
export default NimrajIndustries