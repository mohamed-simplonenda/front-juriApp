import React from 'react'
import {Carousel,Container,Row,Col} from 'react-bootstrap' 
import client1 from '../images/client/client1.png'
import client2 from '../images/client/client2.png'
import client3 from '../images/client/client3.png'



export default function Témoingnage() {
    return (
        <div className="d-flex justify-content-center">
        <div className="col-md-8 col-12 mx-5 my-5 px-5 ">
            <Carousel>
  <Carousel.Item>
  <Container>
      
  <Row>
              <Col lg={3} xs={12} sm={12}>
              <img
            className="d-block w-100 img-temoingnage  "
            src={client1}
            alt="First slide"
     
            />
              </Col>
              <Col lg={9} xs={12} sm={12}>
              <p className="mt-3 blog-p">Their work on our website and Internet marketing has made a significant different to our business. We’ve seen a 425% increase in quote requests from the website which has been pretty remarkable – but I’d always like to see more!</p>
              <h5>Mohamed Mansour</h5>
              <p className="text-muted">Avocat</p>
              </Col>
          </Row>
      </Container>
  
  
  </Carousel.Item>
  <Carousel.Item>
  <Container>
          <Row>
              <Col lg={4} xs={12} sm={12}>
              <img
            className="d-block w-100 img-temoingnage "
            src={client2}
            alt="First slide"
     
            />
              </Col>
              <Col lg={8} xs={12} sm={12}>
              <p className="mt-3 blog-p">Their work on our website and Internet marketing has made a significant different to our business. We’ve seen a 425% increase in quote requests from the website which has been pretty remarkable – but I’d always like to see more!</p>
              <h5>Fedia hamza</h5>
              <p className="text-muted">Avocat</p>
              </Col>
          </Row>
      </Container>
  </Carousel.Item>
  <Carousel.Item>
  <Container>
          <Row>
              <Col lg={3} xs={12} sm={12}>
              <img
            className="d-block w-100 img-temoingnage  "
            src={client3}
            alt="First slide"
     
            />
              </Col>
              <Col lg={9} xs={12} sm={12}>
              <p className="mt-3 blog-p">Their work on our website and Internet marketing has made a significant different to our business. We’ve seen a 425% increase in quote requests from the website which has been pretty remarkable – but I’d always like to see more!</p>
              <h5>Amine Samet</h5>
              <p className="text-muted">CEO Manager</p>
              </Col>
          </Row>
      </Container>


  </Carousel.Item>
</Carousel>
            
        </div>
        </div>

    )
}
