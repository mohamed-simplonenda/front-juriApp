import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'

export default function ContactInfo() {
    return (
        <div className="desc text-center">
        <Container>
        <Row>
                <Col>
                <i class="fas fa-map-marker-alt "></i>
               
                <p>1010 Avenue, ettahrir supérieur.</p>

                </Col>
                <Col>
                <i class="fas fa-phone-alt "></i>
              
                <p>+216 22 386 557, +216 22 386 557</p>
                
                </Col>
                <Col>
                <i class="far fa-envelope"></i>
               
                <p>contact@gmail.com</p>
                
                </Col>
    

            </Row>
            
        </Container>

            
        </div>
    )
}
