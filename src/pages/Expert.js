import React from 'react'
import Footer from '../components/Footer'
import { Menu } from '../components/navbar'
import RechercheExpert from '../components/rechercheExpert'
import TopBar from '../components/topBar'

export default function Expert() {
    return (
        <div>
            <TopBar/>
            <Menu/>
            <div className="path">
                <h1>Expert</h1>
                <p>Accueill <span><i class="fas fa-angle-double-right mx-2"></i></span> Expert</p>
            </div>
            <RechercheExpert/>
            <Footer/>
            
        </div>
    )
}
