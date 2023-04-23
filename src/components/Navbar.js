import React, { useState } from 'react'
import img from '../img/logo.png'
import { Link } from "react-router-dom";


export default function Navbar() {

  const [navbar, setNavbar] = useState(false);

  const setBackground =  ()=>{
      if (window.scrollY >= 100){
        setNavbar(true);
      }
      else{
        setNavbar(false);
      }
  }

  window.addEventListener('scroll',setBackground);
  
  return (
    <>
      <nav className=" navbar-expand-lg navbar-light fixed-top "  >
     <nav className={navbar?"navbar active" : "navbar"}>
  <div className="container">
    <Link className="navbar-brand" to="/">SHIVEEN <span className='logodesign'>DESIGN</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{flexGrow:0}}>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
        <li className="nav-item">
         <Link className="nav-link active" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="/photos">Photos</Link>
        </li>
         {/* <li className="nav-item">
         <Link className="nav-link active" to="/Servises">Servises</Link>
        </li>
         <li className="nav-item">
        <Link className="nav-link active" to="/Project">Projects</Link>
        </li> 
        <li className="nav-item">
         <Link className="nav-link active" to="/Contact">Contact</Link>
        </li> */}
        
        
      </ul>
     
    </div>
  </div>
</nav>
</nav>

    </>
  )
}
