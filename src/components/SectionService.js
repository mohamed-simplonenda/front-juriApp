import React from 'react'
import { Col ,Container,Row} from 'react-bootstrap'

export default function SectionService() {
    return (
        <div className="desc1 text-center">
        <Container>
            <Row>
                
                 <Col md={4} xs={12}>
                <h5><span><i class="fas fa-comment-dots"></i></span>Nous sommes professionnels</h5>
                <p>Nous ressource, formons, parlons, encadrons et encourageons; les leaders du marché.</p>
                </Col>

                 <Col md={4} xs={12}>
                <h5><span><i class="fas fa-palette"></i></span>Nous sommes créatifs</h5>
                <p>Avec autant de facteurs à prendre en compte pour décider comment caractériser votre entreprise.</p>
                </Col>

                 <Col md={4} xs={12}>
                <h5><span><i class="fas fa-clock"></i></span>24/7 Excellent support </h5>
                <p>Concevez des stratégies marketing intelligentes et convaincantes, améliorez le positionnement des produits .</p>
                </Col>

            </Row>
        </Container>
            
        </div>
    )
}
