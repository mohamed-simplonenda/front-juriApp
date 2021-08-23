import React from 'react'
import ContactInfo from '../components/ContactInfo'
import ContactInput from '../components/ContactInput'
import Footer from '../components/Footer'
import { Menu } from '../components/navbar'
import TopBar from '../components/topBar'

export default function Contact() {
    return (
        <div>
            <TopBar/>
            <Menu/>
            <div className="path">
                <h1>Contact</h1>
                <p>Accueill <span><i class="fas fa-angle-double-right mx-2"></i></span> Contact</p>
            </div>
            <ContactInfo/>
            <ContactInput/>
            <Footer/>
            
        </div>
    )
}
