import React from 'react'
import { Col ,Container,Row} from 'react-bootstrap'

export default function SectionService() {
    return (
        <div className="desc1 text-center">
        <Container>
            <Row>
                
                <Col>
                <h5><span><i class="fas fa-comment-dots"></i></span>Nous sommes professionnels</h5>
                <p>Nous ressource, formons, parlons, encadrons et encourageons; les leaders du marché, les propriétaires d'entreprise et les professionnels de carrière pour être efficaces sur le lieu de travail.</p>
                </Col>

                <Col>
                <h5><span><i class="fas fa-palette"></i></span>Nous sommes créatifs</h5>
                <p>Avec autant de facteurs à prendre en compte pour décider comment caractériser votre entreprise, ne serait-il pas formidable d'avoir à bord un groupe de personnes avant-gardistes et bien informées qui savent ce qu'elles font ?.</p>
                </Col>

                <Col>
                <h5><span><i class="fas fa-clock"></i></span>24/7 Excellent support </h5>
                <p>Concevez des stratégies marketing intelligentes et convaincantes, améliorez le positionnement des produits et augmentez les taux de conversion, Elixir est toujours disponible pour vous guider.</p>
                </Col>

            </Row>
        </Container>
            
        </div>
    )
}
