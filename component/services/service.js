import "./service.css"
import pic1 from "./webdev.jpg";
import pic2 from "./android-12.webp";
import pic3 from "./images.png";


function Service(){ return(
<div className="services">

   
    <div className="background">
      <div className="heading">
      <h2 className="section-heading">Services we provided</h2>
      <h3 className="section-subheading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, doloremque.</h3>
    </div>

    <div className="container">
        <div className="row">
        <img className="image" src= {pic1} alt=""/>
         <div className="text">
        <h4>Entrepreneur</h4>
        <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
         </div>
    </div>

    
    <div className="row">
     
        <img className="image" src= {pic2} alt=""/>
        <div className="text">
        <h4>Investors</h4>
        <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    
    </div>
    
    
    <div className="row">
      
        <img className="image" src= {pic3} alt=""/>
        <div className="text">
        <h4>Single Users</h4>
        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
 

    
  </div>
  </div>
  </div>
   
  

);
};

export default Service;