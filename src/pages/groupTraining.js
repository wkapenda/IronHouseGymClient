import React, {useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ScrollToTop from "../components/ScrollToTop"
import { groupTrainingIntro } from '../components/IntroSection/Data'
import IntroSection from '../components/IntroSection/index'
import PersonalTrainers from '../components/PersonalTrainers'
import { ClassesContainer } from "../components/GroupTraining/GroupTrainingElements"
import {HeadingContainer, HeadingH1 } from "../components/Card/CardElements"
import { WednesdayClassData, SaturdayClassData } from '../components/GroupTraining/Data'

// import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import GroupTrainingSection from '../components/GroupTraining'


const GroupTraining = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    }



    return (
        <>

        <ScrollToTop />

            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <IntroSection {...groupTrainingIntro} />
            <HeadingContainer>
            <HeadingH1>FOR AN INTENSE WORKOUT, ALL IRON HOUSE MEMBERS CAN PARTICIPATE IN OUR FITNESS CLASSES</HeadingH1>
            </HeadingContainer>
            <ClassesContainer>
            <GroupTrainingSection groupTrainingData = {WednesdayClassData}/>
            <GroupTrainingSection groupTrainingData = {SaturdayClassData}/>
            </ClassesContainer>

            {/* <p>{date}</p> */}

           <Footer />
        </>
    )
}

export default GroupTraining