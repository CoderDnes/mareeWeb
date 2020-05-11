import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../WorkProgess/WorkProgress.css'


const WorkProgress = () => {
    const work=[
        {
            topic:'First theres an idea',
            icon_link:'https://res.cloudinary.com/di23q5uen/image/upload/v1589110575/icons/iconfinder_Citycons_light_1342949_lmtax9.png',
            description:'Ut elit est anim consequat voluptate ipsum veniam nulla eiusmod ex ut dolore pariatur.'
        },
        {
            topic:'First theres an idea',
            icon_link:'https://res.cloudinary.com/di23q5uen/image/upload/v1589111951/icons/2561249-256_gjdplz.png',
            description:'Ut elit est anim consequat voluptate ipsum veniam nulla eiusmod ex ut dolore pariatur.'
      
        },
        {
            topic:'First theres an idea',
            icon_link:'https://res.cloudinary.com/di23q5uen/image/upload/v1589110575/icons/iconfinder_Citycons_light_1342949_lmtax9.png',
            description:'Ut elit est anim consequat voluptate ipsum veniam nulla eiusmod ex ut dolore pariatur.'
      
        },
        {
            topic:'First theres an idea',
            icon_link:'https://res.cloudinary.com/di23q5uen/image/upload/v1589110575/icons/iconfinder_Citycons_light_1342949_lmtax9.png',
            description:'Ut elit est anim consequat voluptate ipsum veniam nulla eiusmod ex ut dolore pariatur.'
      
        }
    ]
  return (
    <div className='wrapper'>
      <div className='container'>
      <h2>Working <span>Process</span></h2>
      </div>
      <Container fluid>
        <Row md={4} style={{height:'auto'}}>
          {work.map((item,index)=>(
              <Col key={index}>
                  <div className='image-container' 
                   style={{background:`url('${item.icon_link}') no-repeat center center`,backgroundSize:`cover`}}></div>
                   <h4>{item.topic}</h4>
                   <p>{item.description}</p>
              </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default WorkProgress;
