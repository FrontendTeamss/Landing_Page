import "./internship.css";
import pic from "./webdev.jpg";
import pic3 from "./javascript.png";
import pic2 from "./php.jpg";
function Internship() {
  return (
    <div className="a">
    <div className="a-container">

      
      <div className="a-left">
        <h1 className="a-title">Entrepreneur</h1>
        <p className="a-sub">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum officiis et adipisci 
         liquid ipsam? Doloribus odit iure odio libero porro voluptatum? Molestiae optio asperiores
          harum a nulla. Vitae tenetur velit ipsam dolore inventore doloribus, quas corporis, 
          amet repudiandae consequatur exercitationem est et nulla sit sequi enim harum obcaecati
           recusandae officia? Voluptatem reprehenderit similique praesentium commodi iste eius, accusamus, 
           rem minus placeat aliquid facere culpa sequi nulla quas deserunt alias sapiente earum eos
          </p>
          <div className="Button">
          
            <button type="submit" className="button">Sign Up</button>
            <button type="submit" className="button">Log In</button>
            <button type="play" className="button">Play Video</button>
           
           
           </div>
       </div>

       <div className="a-right">
        
        <div className="a-card">
          <img src={pic}
            alt=""
            className="a-img"
          />
        </div>
      </div>
       </div>
     
       <div className="b-container">
       <div className="b-left">
       
        <div className="b-card">
          <img src={pic2}
            alt=""
            className="b-img"
          />
        </div>
      </div>
      <div className="b-right">
        <h1 className="b-title">Investors</h1>
        <p className="b-sub">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum officiis et adipisci 
         liquid ipsam? Doloribus odit iure odio libero porro voluptatum? Molestiae optio asperiores
          harum a nulla. Vitae tenetur velit ipsam dolore inventore doloribus, quas corporis, 
          amet repudiandae consequatur exercitationem est et nulla sit sequi enim harum obcaecati
           recusandae officia? Voluptatem reprehenderit similique praesentium commodi iste eius, accusamus, 
           rem minus placeat aliquid facere culpa sequi nulla quas deserunt alias sapiente earum eos
          </p>
          
          <div className="Button">
          
          <button type="submit" className="button">Sign Up</button>
          <button type="submit" className="button">Log In</button>
          <button type="play" className="button">Play Video</button>
        
     
          </div>
       </div>
       </div>
       <div className="c-container">
       
      <div className="c-left">
        <h1 className="c-title">Single Users</h1>
        <p className="c-sub">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum officiis et adipisci 
         liquid ipsam? Doloribus odit iure odio libero porro voluptatum? Molestiae optio asperiores
          harum a nulla. Vitae tenetur velit ipsam dolore inventore doloribus, quas corporis, 
          amet repudiandae consequatur exercitationem est et nulla sit sequi enim harum obcaecati
           recusandae officia? Voluptatem reprehenderit similique praesentium commodi iste eius, accusamus, 
           rem minus placeat aliquid facere culpa sequi nulla quas deserunt alias sapiente earum eos
          </p>
          <div className="Button">
          
            <button type="submit" className="button">Sign Up</button>
            <button type="submit" className="button">Log In</button>
            <button type="play" className="button">Play Video</button>
       </div>
       </div>

       <div className="c-right">
        <div className="c-card bg"></div>
        <div className="c-card">
          <img src={pic3}
            alt=""
            className="c-img"
          />
        </div>
      </div>
       </div>



    </div>
  );
};

export default Internship;