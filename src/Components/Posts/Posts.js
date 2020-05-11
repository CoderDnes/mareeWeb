import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";

const postInfo = [
  {
    image: "https://res.cloudinary.com/di23q5uen/image/upload/v1589185344/h-2-blog-img-1_ueptsf.jpg",
    title: "This way, loves: a detailed guide through new design",
    postedBy: "Jhon Doe"
  },
  {
    image: "https://res.cloudinary.com/di23q5uen/image/upload/v1589121996/icons/h-3-port-gallery-3-1_ard5l8.jpg",
    title: "This way, loves: a detailed guide through new design",
    postedBy: "Jhon Doe"
  },
  {
    image: "https://res.cloudinary.com/di23q5uen/image/upload/v1589121569/icons/h-3-port-gallery-5_jexlkt.jpg",
    title: "This way, loves: a detailed guide through new design",
    postedBy: "Jhon Doe"
  }
];

const Posts = () => {
  return (
    <CardGroup style={{marginTop:'1.5rem'}}>
      {postInfo.map((item, index) => (
       
        
        <Card key={index} style={{margin:'0rem 1rem 0rem 1rem',border:'none'}} >
        <a href='/' style={{lineStyle:'none',textDecoration:'none'}}>
          <Card.Img variant="top" src={item.image} style={{height:'300px'}} />
          
          <Card.Body>
            <Card.Title style={{fontWeight:'bold'}}>{item.title}</Card.Title>
            <h5>By {item.postedBy}</h5>
          </Card.Body>
          </a>
        </Card>
        
        
      ))}
    </CardGroup>
  );
};
export default Posts;
