import React from 'react'
import {Carousel} from 'react-bootstrap' 
import header1 from '../images/header-1.jpg'
import header2 from '../images/header-5.jpg'
import header3 from '../images/header-6.jpg'

export default function Slider() {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    
    <img
      className="d-block w-100 "
      src={header1}
      alt="First slide"
     
    />
   
    <Carousel.Caption>
    <div className="slider">
      <h3>Consultants experts</h3>
      <p>Plus de 2 ans d'expérience à <br/>aider les clients à trouver des solutions complètes</p>
      </div>
    </Carousel.Caption>
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-50"
      src={header2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <div className="slider">
    <h3>Partenaires de croissance</h3>
      <p>Connectez-vous avec les meilleurs  <br/>consultants triés sur le volet par Juridique.tn.</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-50"
      src={header3}
      alt="Third slide"
    />

     <Carousel.Caption>
      <div className="slider">
      <h3>Consultants experts</h3>
      <p>Plus de 2 ans d'expérience à <br/>aider les clients à trouver des solutions complètes</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            
        </div>
    )
}
