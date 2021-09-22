import React from 'react'
import { Container, Row ,Col,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function ContactUs() {
    return (
        <div className="contact">
            <Container>
                <Row>
                    <Col lg={9} xs={12} sm={12}>
                    <h4>Nous sommes disponibles 24h/24 et 7j/7</h4>
                    </Col>
                    <Col lg={3} xs={12} sm={12}>
                    <Link to="/contact"><Button variant="light" className="btn-contact">Contactez-nous</Button></Link>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}
