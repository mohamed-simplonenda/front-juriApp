import React from 'react'
import {Container,Col,Row} from 'react-bootstrap'
import service1 from '../images/services/6.jpg'
import service2 from '../images/services/7.jpg'
import service3 from '../images/services/8.jpg'

export default function NosServices() {
    return (
        <div>
            <Container>
                <h2 className="text-center mb-5">Nos services</h2>
                <Row>
                     <Col md={6} xs={12}>
                            <img
                            className="d-block w-100 "
                            src={service1}
                            alt="First slide"
            
                           />
                    </Col>
                    <Col className="mt-5 pt-5">
                    <h5>Service juridique.tn</h5>
                    <p>Their work on our website and Internet marketing has made a significant different to our business. We’ve seen a 425% increase in quote requests from the website which has been pretty remarkable – but I’d always like to see more!</p>
                    </Col>
                </Row>
                <Row>

                    <Col className="mt-5 pt-5">
                    <h5>Service juridique.tn</h5>
                    <p>Their work on our website and Internet marketing has made a significant different to our business. We’ve seen a 425% increase in quote requests from the website which has been pretty remarkable – but I’d always like to see more!</p>
                    </Col>
                     <Col md={6} xs={12}>
                            <img
                            className="d-block w-100 "
                            src={service2}
                            alt="First slide"
            
                           />
                    </Col>
                </Row>
                <Row>
                     <Col md={6} xs={12}>
                            <img
                            className="d-block w-100 "
                            src={service3}
                            alt="First slide"
            
                           />
                    </Col>
                    <Col className="mt-5 pt-5">
                    <h5>Service juridique.tn</h5>
                    <p>Their work on our website and Internet marketing has made a significant different to our business. We’ve seen a 425% increase in quote requests from the website which has been pretty remarkable – but I’d always like to see more!</p>
                    </Col>
                </Row>
              
            </Container>
            
        </div>
    )
}
