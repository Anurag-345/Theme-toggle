import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  
  
  return (
    <>
      <div  id="main" >
        <div className="navLinks">
           <Link to="/">Home</Link>
           <Link to="/contact">Contact</Link>
           <Link to="/service">Service</Link>
        </div>
        <div className="themeBtn">
          <h3>Current theme : {props.theme}</h3>
            <button id="btn" onClick={props.func}>Change theme</button> 
        </div>
      </div>
    </>
  )

  
}



export default Header;