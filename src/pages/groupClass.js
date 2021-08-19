import React, {useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ScrollToTop from "../components/ScrollToTop"
import ClassSection from "../components/ClassSection"
import {HeadingContainer, HeadingH1 } from "../components/Card/CardElements"
import { useParams } from "react-router-dom";
import { WednesdayClassData, SaturdayClassData } from "../components/GroupTraining/Data"


// import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import FormContainer from '../components/ClassFormSection'



const GroupClass = () => {

    let { session } = useParams();

    const allClasses = [WednesdayClassData, SaturdayClassData]

    // console.log(allClasses)


    const result = allClasses.filter(eachClass => eachClass.id === session)

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    }



    return (
        <>

        <ScrollToTop />
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} />
        <ClassSection session = {result} />
        <FormContainer />
        <Footer />
        
        </>
    )
}

export default GroupClass