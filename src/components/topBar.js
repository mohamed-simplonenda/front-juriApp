import React from 'react'
import {Col,Container,Row} from 'react-bootstrap'
export default function TopBar() {
    return (
        <div className="topBar">
        <Container>
     
        <Row>
            <Col>
            <p>
                <span><i class="fas fa-map-marker-alt "></i></span>
                1010 Avenue, ettahrir supérieur.
            </p>
            </Col>
            <Col md="auto">
            <p>
                <span><i class="fas fa-phone-alt "></i></span>
                +216 22 386 557, +216 22 386 557
            </p>
            </Col>
            <Col xs lg="3">
            <p>
                <span><i class="far fa-clock"></i></span>
                Lun-Sam, 8.00-18.00. 
            </p>
            </Col>
        </Row>
        </Container>
        </div>
    )
}
