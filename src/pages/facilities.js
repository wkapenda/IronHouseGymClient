import React, {useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ScrollToTop from "../components/ScrollToTop"
import { facilityIntro } from '../components/IntroSection/Data'
import IntroSection from '../components/IntroSection/index'
import Card from '../components/Card';
import { FacilityData, AmenityData } from '../components/Card/Data'


const Facilities = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>

        <ScrollToTop />

            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <IntroSection {...facilityIntro} />
            <Card data = {FacilityData} data1 = {AmenityData}/>
           <Footer />
        </>
    )
}

export default Facilities
