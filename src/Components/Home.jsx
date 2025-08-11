import { Button } from 'react-bootstrap'
import MainPageSlider from '../Components/MainPageSlider'
import NimrajIndustries from '../Components/NimrajIndustries'
import OurClients from './OurClients'
import UserReview from './UserReview'
import GetInTouch from './GetInTouch'
import LogoMarquee from './LogoMarquee'
import SocialSubscribe from './SocialSubscribe'


const Home = () => {
  return (
    <>
    <div>
        <MainPageSlider/>
        <NimrajIndustries/>
        <OurClients/>
        <UserReview/>
        <GetInTouch />
      <LogoMarquee />
      <SocialSubscribe />
      <p>Hellogit</p>
    </div>
    </>
  )
}

export default Home