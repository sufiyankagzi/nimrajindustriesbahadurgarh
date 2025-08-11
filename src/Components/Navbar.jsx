import { IoSearchOutline } from "react-icons/io5";
import { DiYii } from "react-icons/di";
import { Container, Nav, Form, Navbar, InputGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Navbar.css';
const NavbarMain = () => {
    return (
        <>
            <Navbar expand="xl" className="border-bottom py-2">
                <Container fluid className="px-3">
                    
                    <div className='d-flex align-items-center d-md-none fs-4 justify-content-between w-100 '>
                        <Navbar.Toggle aria-controls="navbarScroll" className="mx-0 me-1 px-0 py-2 border-0" />
                        
                        <div className='d-flex align-items-center justify-content-center gap-2 w-100 mx-0'>
                            <Link to="/" className="text-decoration-none text-dark d-flex align-items-center gap-2">
                            <DiYii className="fs-1 m-0 " style={{ color: "#CF3079" }} />
                            <div className="d-flex justify-content-center text-center position-relative">
                                <Navbar.Brand href="/" className="mx-0 px-0 d-flex flex-column align-items-start" style={{ fontFamily: "Poppins", fontSize: "24px", lineHeight: "1.2" }}>Nimraj Industries
                                    <span className="typewriter-text d-md-block" style={{ fontSize: "14.5px", fontFamily: "Jura", color: "#CF3079", fontWeight: "600", marginTop: "2px" }}>“Step Into Style”</span>
                                </Navbar.Brand>
                            </div>
                            </Link>
                        </div>
                        
                        <div className='d-lg-none align-items-center fs-4 justify-content-end'>
                            <IoSearchOutline style={{ cursor: "pointer" }} />
                        </div>
                    </div>
                   

                    <div className='d-none d-md-flex align-items-center gap-4 ms-auto me-4 fs-4 justify-content-center '>
                        <Navbar.Toggle aria-controls="navbarScroll" className="me-2 border-0" />
                        <DiYii className="fs-1 m-0 " style={{ color: "#CF3079" }} />
                        <div className="d-flex justify-content-center  position-relative">
                            <Navbar.Brand href="#" className="mx-0 px-0 d-flex flex-column align-items-start" style={{ fontFamily: "Poppins", fontWeight:"600" ,fontSize: "28px", lineHeight: "1.2" }}>Nimraj Industries
                                <span className="typewriter-text d-none d-md-block" style={{ fontSize: "15.5px", fontFamily: "Jura", color: "#CF3079", fontWeight: "600", marginTop: "2px" }}>“Step Into Style”</span>
                            </Navbar.Brand>
                        </div>
                    </div>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="d-flex align-items-start gap-4 px-3 py-2 rounded" style={{ fontFamily: "Roboto", fontSize: "16px" }} navbarScroll>
                            {/* <Nav.Link href="#action1" className='fw-bold nav-home'>Home</Nav.Link> */}
                            <Link to="/  " className='fw-bold nav-home'>Home</Link>
                            {/* <Nav.Link href="/aboutus" className='nav-det'>About Us</Nav.Link> */}
                            <Link to="/aboutus  " className='nav-det'>About Us</Link>

                            <Nav.Link href="#action1" className='nav-det'>Products</Nav.Link>
                            <Nav.Link href="#action1" className='nav-det'>Bestsellers</Nav.Link>
                            <Nav.Link href="#action1" className='nav-det'>New Arrivals</Nav.Link>
                            <Nav.Link href="#action1" className='nav-det'>Career</Nav.Link>
                            <Link to="/contactus  " className='nav-det'>Contact Us</Link>

                        </Nav>
                        <div className='d-none d-md-flex align-items-center ms-auto fs-4 justify-content-end'>
                            <InputGroup style={{ width: "400px" }} className="d-flex align-items-center">
                                
                                <Form.Control
                                    type="text"
                                    placeholder="Search woven wonders..."
                                    style={{
                                        fontSize: "14px",
                                        boxShadow: "none",
                                        border:"1px solid grey"
                                    }}
                                />
                                <InputGroup.Text className="search-hover" >
                                    <IoSearchOutline style={{ fontSize: "23px", color: "white",cursor:"pointer" }} />
                                </InputGroup.Text>
                            </InputGroup>
                        </div>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};
export default NavbarMain;