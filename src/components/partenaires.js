import React from 'react'
import part1 from '../images/partenaires/logo1.png'
import part2 from '../images/partenaires/logo2.png'
import part3 from '../images/partenaires/logo3.png'
import part4 from '../images/partenaires/logo4.png'
import part5 from '../images/partenaires/logo5.png'
export default function Partenaires() {
    return (
        <div className="d-flex justify-content-evenly my-5 py-5 partenaire">

          <img
            className="img-partenaire "
            src={part1}
            alt="First slide"
            
            
     
            /> 

          <img
            className="img-partenaire "
            src={part2}
            alt="First slide"
     
            /> 

          <img
            className="img-partenaire "
            src={part3}
            alt="First slide"
     
            /> 
                      <img
            className="img-partenaire "
            src={part4}
            alt="First slide"
     
            /> 
                      <img
            className="img-partenaire "
            src={part5}
            alt="First slide"
     
            /> 
                
        </div>
    )
}
