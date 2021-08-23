import React from 'react'
import ChooseSectionHome from '../components/chooseSectionHome'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import { Menu } from '../components/navbar'
import NosServices from '../components/NosServices'
import Partenaires from '../components/partenaires'
import SectionService from '../components/SectionService'
import TopBar from '../components/topBar'
import Témoingnage from '../components/Témoingnage'

export default function Service() {
    return (
        <div>
          
            <TopBar/>
            <Menu/>
            <div className="path">
                <h1>Service</h1>
                <p>Accueill <span><i class="fas fa-angle-double-right mx-2"></i></span> Service</p>
            </div>
            <ChooseSectionHome/>
            <NosServices/>
            <SectionService/>
            <ContactUs/>
            <Témoingnage/>
            <Partenaires/>
            <Footer/>
            
        </div>
    )
}
