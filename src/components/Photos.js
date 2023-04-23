import React from 'react'
import photo from '../img/1  FINAL.jpg'
import photo1 from '../img/ASTER.jpg'
import photo2 from '../img/BON CRSYTALO 600X1200_A.jpg'
import photo3 from '../img/TROPICAL NATURAL FINAL .jpg'
import photo4 from '../img/Equita 1.jpg'
import Navbar from './Navbar'

export default function Photos() {
    return (
        <>
        <Navbar/>
            <div className="imgBox">
                <div className="photoss">
                    <div className="boxx">

                        <div className="container"  >
                            <h5 >Some quick example text to build on the card title and make up the bulk of the card's content.</h5>
                        </div>

                        <div className="container">
                            <img src={photo} className="card-img-top" alt="..." />
                        </div>

                        <div className="container">
                            <img src={photo} className="card-img-top" alt="..." />
                        </div>
                       

                        <div className="container">
                            <img src={photo} className="card-img-top" alt="..." />
                        </div>


                        <div className="container">
                            <img src={photo} className="card-img-top" alt="..." />
                        </div>

                        <div className="container">
                            <img src={photo} className="card-img-top" alt="..." />
                        </div>

        

                    </div>

                </div>
            </div>
        </>
    )
}
