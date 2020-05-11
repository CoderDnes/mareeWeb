import React from 'react';
import Navbar from './Components/NavBar/NavBar';
import Crousal from './Components/Crousal/Crousal';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageGridList from './Components/ImageGridList/ImageGrid';
import WorkProgress from './Components/WorkProgess/WorkProgress';
import Contact from './Components/Contact/Contact';
import Posts from './Components/Posts/Posts';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
    <Navbar/>
     <Crousal/> 
    <ImageGridList/>
    <WorkProgress/>
    <Contact/> 
    <Posts/>
    <Footer/>

      
    </div>
  );
}

export default App;
