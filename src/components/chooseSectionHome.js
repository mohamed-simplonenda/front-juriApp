import React from 'react'
import { Row,Col,Container } from 'react-bootstrap'
import choose from '../images/why-choose-us.jpg'
export default function ChooseSectionHome() {
    return (
        <div className="desc1">
            <h2 className="text-center my-5">Pourquoi choisir juridique.tn ?</h2>
            <Container>
            <Row>
                <Col md={6} xs={12}>
                <img
                className="d-block w-100 "
                src={choose}
                alt="First slide"
                  style={{borderRadius:'15px'}}
                />
                </Col>
                <Col md={6} xs={12}>
                <h5 className="mt-4"><span><i class="fas fa-comment-dots"></i></span>Nous sommes professionnels</h5>
                <p>Nous ressource, formons, parlons, encadrons et encourageons; les leaders du marché, les propriétaires d'entreprise et les professionnels de carrière pour être efficaces sur le lieu de travail.</p>
                <h5><span><i class="fas fa-palette"></i></span>Nous sommes créatifs</h5>
                <p>Avec autant de facteurs à prendre en compte pour décider comment caractériser votre entreprise, ne serait-il pas formidable d'avoir à bord un groupe de personnes avant-gardistes et bien informées qui savent ce qu'elles font ?.</p>
                <h5><span><i class="fas fa-clock"></i></span>24/7 Excellent support </h5>
                <p>Concevez des stratégies marketing intelligentes et convaincantes, améliorez le positionnement des produits et augmentez les taux de conversion, Elixir est toujours disponible pour vous guider.</p>
                </Col>
            </Row>
            </Container>
            
        </div>
    )
}
