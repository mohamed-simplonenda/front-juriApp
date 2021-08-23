import React from 'react'
import {Carousel,Container,Row,Col} from 'react-bootstrap' 
import client1 from '../images/client/client1.png'
import client2 from '../images/client/client2.png'
import client3 from '../images/client/client3.png'



export default function Témoingnage() {
    return (
        <div className="d-flex justify-content-center">
        <div className="col-md-8 mx-5 my-5 px-5 ">
            <Carousel>
  <Carousel.Item>
  <Container>
      
          <div class="row px-lg-8">
              <div class="col-4 col-md-3 mx-auto">
              <img
            className="d-block w-100 "
            src={client1}
            alt="First slide"
            width="110px"
     
            />
              </div>
              <div class="col-md-9 ml-auto mt-4 mt-md-0 px-4 px-sm-3">
              <p>Their work on our website and Internet marketing has made a significant different to our business. We’ve seen a 425% increase in quote requests from the website which has been pretty remarkable – but I’d always like to see more!</p>
              <h5>Mohamed Mansour</h5>
              <p className="text-muted">CEO Manager</p>
              </div>
          </div>
      </Container>
  
  
  </Carousel.Item>
  <Carousel.Item>
  <Container>
          <Row>
              <Col lg={3} xs={3} sm={12}>
              <img
            className="d-block w-100 "
            src={client2}
            alt="First slide"
     
            />
              </Col>
              <Col lg={9} xs={9} sm={12}>
              <p>Their work on our website and Internet marketing has made a significant different to our business. We’ve seen a 425% increase in quote requests from the website which has been pretty remarkable – but I’d always like to see more!</p>
              <h5>Mohamed Mansour</h5>
              <p className="text-muted">CEO Manager</p>
              </Col>
          </Row>
      </Container>
  </Carousel.Item>
  <Carousel.Item>
  <Container>
          <Row>
              <Col lg={3} xs={3} sm={12}>
              <img
            className="d-block w-100 "
            src={client3}
            alt="First slide"
     
            />
              </Col>
              <Col lg={9} xs={9} sm={12}>
              <p>Their work on our website and Internet marketing has made a significant different to our business. We’ve seen a 425% increase in quote requests from the website which has been pretty remarkable – but I’d always like to see more!</p>
              <h5>Mohamed Mansour</h5>
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
