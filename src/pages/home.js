import React from 'react'
import AboutSectionHome from '../components/aboutSectionHome'
import ChooseSectionHome from '../components/chooseSectionHome'
import ContactUs from '../components/ContactUs'
import FanFact from '../components/FanFact'
import Footer from '../components/Footer'
import { Menu } from '../components/navbar'
import NosServices from '../components/NosServices'
import Partenaires from '../components/partenaires'
import Slider from '../components/slider'
import TopBar from '../components/topBar'
import Témoingnage from '../components/Témoingnage'

export default function Home() {
    return (
        <div>
           <TopBar/>
           <Menu/>
           <Slider/>
           <AboutSectionHome/>
           <ChooseSectionHome/>
           <ContactUs/>
           <FanFact/>
           <Témoingnage/>
           <Partenaires/>
           <Footer/>
        </div>
    )
}
