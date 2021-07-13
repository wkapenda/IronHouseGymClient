import React, {useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ScrollToTop from "../components/ScrollToTop"
import { personalTrainingIntro } from '../components/IntroSection/Data'
import IntroSection from '../components/IntroSection/index'
import PersonalTrainers from '../components/PersonalTrainers'
// import Card from '../components/Card';
import { TrainersData } from '../components/PersonalTrainers/Data'


const PersonalTraining = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>

        <ScrollToTop />

            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <IntroSection {...personalTrainingIntro} />
            <PersonalTrainers trainersData = {TrainersData}/>
            {/* <Card data = {FacilityData} data1 = {AmenityData}/> */}
           <Footer />
        </>
    )
}

export default PersonalTraining