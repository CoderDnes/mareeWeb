import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import '../Contact/contact.css';

const Contact = () => {
  return (
    <Container fluid>
      <Row md={1} >
        <Col style={{background:`url('https://res.cloudinary.com/di23q5uen/image/upload/v1589122688/icons/52af290b92495132cd3eec2d5615dbad_qxk7a0.jpg')no-repeat center center`,backgroundSize:`cover`}}>
           <div className='info-wrapper'>
               <h2>Want to work with us? Send us <span>a message!</span></h2>
               <div className='contact-info'>
                 <p>Culpa commodo officia dolor sit elit non ex laborum et duis esse officia in. Et anim nisi nisi veniam cupidatat irure do esse ullamco ut. Mollit ea tempor dolor consectetur consectetur consequat exercitation eu duis ad irure.</p>
               </div>
                 <a className='contact-us' href='/'>Contact Us</a>
           </div>

        </Col>
      </Row>
    </Container>
  );
};
export default Contact;
