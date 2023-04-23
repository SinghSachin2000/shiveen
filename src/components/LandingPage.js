import React from 'react'
import photo1 from '../img/FINAL DESIGN.jpg'
import photo2 from '../img/BON CRSYTALO 600X1200_A.jpg'
import photo3 from '../img/photo3.jpg'
import photo4 from '../img/ASTER.jpg'
import photo5 from '../img/1.jpg'
import photo6 from '../img/pk1.jpg'
import photo7 from '../img/pk3 (2).jpg'
import photo8 from '../img/pk3 (1).jpg'
import Choose from './Choose'
import Navbar from './Navbar'
import Footer from './Footer'

export default function LandingPage() {
    return (
        <>    
        <Navbar />
            <div className='topHeader'>
                <div className='name'>SHIVEEN <span className='design'> DESIGN</span></div>
                <div className='dreams'>we design your dreams</div>
            </div>

           <div className='description'>Interior Design Doesn't Have to Be Expensive or Complicated! <br></br> It Should Be Smart & User Friendly</div>
            
           

            <div className='img-slidder'>
            <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={photo6} class="d-block image1 w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src={photo7} class="d-block image2 w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src={photo8} class="d-block image3 w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src={photo4} class="d-block image4 w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src={photo5} class="d-block image5 w-100" alt="..."/>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
            </div>
            <section>
            </section>

        
         <Choose/>
        <Footer/>
        </>

    )
}
