import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { facilitySection } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
// import Services from "../components/Services"
// import Footer from "../components/Footer/index"

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
        
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} />
        <HeroSection />
        <InfoSection {...facilitySection}/>
        {/* <InfoSection {...homeObjTwo}/> 
        <Services />
        <InfoSection {...homeObjThree}/> 
        <Footer />  */}

        </>
    )
}

export default Home
