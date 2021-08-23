import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'

export default function Footer() {
    return (
        <div className="footer">
    <Container>
     <Row>
        <Col lg={3} xs={6} sm={12}>
            <h4>Juridique.tn</h4>
            <p>Juridique.tn est une plateforme d'information juridique qui regroupe l'ensemble de la législation consolidée et de la jurisprudence Tunisienne.</p>
            
  
        </Col>
        <Col lg={3} xs={6} sm={12}>
            <h4>Lien utile</h4>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">A propos</a></li>
            <li><a href="#">Tarif</a></li>
            <li><a href="#">Blog </a></li>
            <li><a href="#">Contact</a></li>
        </Col>
        <Col lg={3} xs={6} sm={12}>
            <h4>Contact</h4>
            <li>
            <p>
                <span><i class="fas fa-map-marker-alt "></i></span>
                32 Avenue, ettahrir supérieur.
            </p>
            </li>
            <li>
            <p>
                <span><i class="fas fa-phone-alt "></i></span>
                +216 22 386 557
            </p>
            </li>
            <li>
            <p>
                <span><i class="far fa-envelope"></i></span>
                contact@gmail.com
            </p>
            </li>

         

           
        
        </Col>
        <Col lg={3} xs={6} sm={12}>
        <h4>Suivez-nous</h4>

            <ul >

               <li><i class="fab fa-facebook-f   icone"></i>Facebook</li> 
               <li> <i class="fab fa-twitter  icone"></i>Twitter</li>              
                <li><i class="fab fa-instagram  icone"></i>Instagram</li>
               <li><i class="fab fa-youtube  icone"></i>Youtube</li>           

            </ul>
        </Col>    
        
     </Row>
    </Container>
    
  <div className="d-flex justify-content-center py-4 mt-4 footerBottom">
  <h6>Copyright @2020 juridique.tn. Designed By MedMansour</h6>
  </div>
            
        </div>
    )
}
