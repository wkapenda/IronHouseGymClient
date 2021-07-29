import React, {useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ScrollToTop from "../components/ScrollToTop"
import { membershipsIntro } from '../components/IntroSection/Data'
import IntroSection from '../components/IntroSection/index'
import MembershipPlans from '../components/MembershipPlans'
import { PlansData } from "../components/MembershipPlans/Data"



const Memberships = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>

        <ScrollToTop />

        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} />
        <IntroSection {...membershipsIntro} />
        <MembershipPlans data = {PlansData} />


        <Footer />
            
        </>
    )
}

export default Memberships
