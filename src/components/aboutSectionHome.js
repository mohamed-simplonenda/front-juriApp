import React from 'react'
import { Row,Container,Col } from 'react-bootstrap'

export default function AboutSectionHome() {
    return (
        <div className="desc text-center">
            <Container>
            <h2>Bienvenue à juridique.tn</h2>
            <p>Obtenez des conseils et un soutien d'experts avec juridique.tn,<br></br> un cabinet de conseil qui est toujours à vos côtés.</p>
            <Row>
                <Col md={3} xs={12}>
                <i class="fas fa-chart-bar"></i>
                <h5>Conseil aux entreprises</h5>
                <p>Solution pour tous les problèmes liés à l'entreprise, facilement et habilement.</p>

                </Col>
                 <Col md={3} xs={12}>
                <i class="fas fa-chart-line"></i>
                <h5>Gestion des risques</h5>
                <p>Calculez tous les risques possibles dans votre entreprise, prenez
                 contrôle sur eux.</p>
                
                </Col>
                 <Col md={3} xs={12}>
                <i class="far fa-lightbulb"></i>
                <h5>Étude de marché</h5>
                <p>Connaître le marché avant de faire quoi que ce soit, réduire
                 risques avant de partir.</p>
                
                </Col>
                 <Col md={3} xs={12}>
                <i class="fas fa-headphones-alt"></i>
                <h5>Prestations de qualité</h5>
                <p>Faites l'expérience d'un service inégalé, dès le début
                 à la construction finale.</p>
                </Col>

            </Row>
            </Container>
        </div>
    )
}
