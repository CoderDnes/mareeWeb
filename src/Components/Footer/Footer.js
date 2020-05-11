import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../Footer/Footer.css';

const Footer = () => {


    
  return (
    <Container fluid>
      <Row md={4} xs={2} style={{backgroundColor:'#c0e1cf'}}>
        <Col>
        <div className='footer'>
          <li><h2 style={{fontSize:'bold'}}>Marée</h2></li>
          <li>Lets be a creative</li>
          </div>
        </Col>
        <Col>
        <div className='footer'>
          <li>iamnull@gmail.com</li>
          <li>+977 98XXXXXXXX</li>
          </div>
        </Col>
        <Col>
        <div className='footer'>
          <li>Nepal Bagmati</li>
          <li>Kathmandu, Kavre</li>
          </div>
        </Col>
        <Col>
        <div className='footer'>
        <li>stay connected with us</li>
          <li>
         <a href='/'> <img style={{marginRight:'8px'}} src='https://res.cloudinary.com/di23q5uen/image/upload/v1589191442/icons/facebook_ukyci2.png' width='20px' height='20px' alt='social icon'></img></a>
         <a href='/'> <img style={{marginRight:'8px'}} src='https://res.cloudinary.com/di23q5uen/image/upload/v1589193824/icons/instagram_pwze3q.png' width='20px' height='20px' alt='social icon'></img></a>
         <a href='/'> <img style={{marginRight:'8px'}} src='https://res.cloudinary.com/di23q5uen/image/upload/v1589194012/icons/twitter_w9lqtl.png' width='20px' height='20px' alt='social icon'></img></a>
          </li>
          </div>
        </Col>
       
        
      </Row>
    </Container>
  );
}
export default Footer;
