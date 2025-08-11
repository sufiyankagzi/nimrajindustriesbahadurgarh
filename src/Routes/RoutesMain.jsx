import { Route,Routes } from "react-router-dom"
import Layout from "../layout/layout"
import Home from "../Components/Home"
import AboutUs from "../Components/AboutUs"
import ContactUs from "../Components/ContactUs"

const RoutesMain = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='/aboutus' element={<AboutUs/>}/>
                <Route path='/contactus' element={<ContactUs/>}/>
            </Route>
        </Routes>
    </>
  )
}

export default RoutesMain