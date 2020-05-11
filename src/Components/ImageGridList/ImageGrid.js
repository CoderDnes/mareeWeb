import React, {} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../ImageGridList/ImageGrid.css';

const ImageGridList = () => { 
  const images = [
    {
        image:'https://res.cloudinary.com/di23q5uen/image/upload/v1589121484/icons/h-3-port-gallery-4_jtvkkv.jpg'
      
    },
    {
        image:'https://res.cloudinary.com/di23q5uen/image/upload/v1589121569/icons/h-3-port-gallery-5_jexlkt.jpg'
      
    },
    {
        image:'https://res.cloudinary.com/di23q5uen/image/upload/v1589121768/icons/h-3-port-gallery-6_mgi36u.jpg'
      
    },
    {
        image:'https://res.cloudinary.com/di23q5uen/image/upload/v1589121910/icons/h-3-port-gallery-2-1_pw2dhl.jpg'
      
    },
    {
        image:'https://res.cloudinary.com/di23q5uen/image/upload/v1589121996/icons/h-3-port-gallery-3-1_ard5l8.jpg'
      
    },
    {
        image:'https://res.cloudinary.com/di23q5uen/image/upload/v1589122139/icons/h-3-port-gallery-7-1300x650_axwhcf.jpg'
      
    }
  ];

  return (
    <Container fluid>
     
        <Row md={3} xs={1}>
           {
              images.map((item,index)=>(
                  <Col key={index} 
                
                   style={{background:`url('${item.image}') no-repeat center center`,backgroundSize:`cover`}} >
                  
                   
                     <div className='image-info' >
                     <div className='title'>All these illustration</div>
                     <div className='keywords'>illustration</div>
                  </div>
                  
                  
                  </Col>
              ))
           }
        </Row>
      
    </Container>
  );
};
export default ImageGridList;
