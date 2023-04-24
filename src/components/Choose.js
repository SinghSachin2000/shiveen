import React from 'react'
import logo from '../img/logo.png'
import house from '../img/house.png'
import bedroom from '../img/icons8-bedroom-interior-48.png'
import bathroom from '../img/icons8-bath-94.png'
import Kit from '../img/icons8-kitchen-room-48.png'
import Dinning from '../img/icons8-dining-room-48.png'
import mandir from '../img/icons8-hindu-swastik-48.png'
import animation from '../img/icons8-animation-64.png'

export default function Choose() {
    return (
        <section className='secComponent'>
            <div className='chooseitem'>
                <div className='headingChoose'>
                    <h1>Design Services</h1></div>
                <div className='card'>
                    <div><img src={animation}></img></div>
                    <div className='heading'>Walkthrough & animation</div>
                    <p className='paragraph'>Animation is a magical world where imagination takes flight.</p>
                </div>
                <div className='firstDiv'>

                    <div className='card'>
                        <div><img src={house}></img></div>
                        <div className='heading'>Exterior Design</div>
                        <p className='paragraph'>Exterior design is the art of crafting a stunning first impression.</p>
                    </div>

                    <div className='card'>
                        <div><img src={bedroom}></img></div>
                        <div className='heading'>Bedroom</div>
                        <p className='paragraph'>A bedroom is a sanctuary of serenity where dreams are born, memories are cherished.</p>
                    </div>

                    <div className='card h-[50rem]'>
                        <div><img className='bathroom w-[5rem]' src={bathroom}></img></div>
                        <div className='heading'>Bathroom</div>
                        <p className='paragraph'>The bathroom is a private oasis where one can cleanse both body and mind.</p>
                    </div>

                    <div className='card'>
                        <div><img src={Kit}></img></div>
                        <div className='heading'>Kitchen</div>
                        <p className='paragraph'>The kitchen is the heart of the home that nourish both the body and soul.</p>
                    </div>

                    <div className='card'>
                        <div><img src={Dinning}></img></div>
                        <div className='heading'>Dinning & Drawing Room</div>
                        <p className='paragraph'>The dining and drawing room is where stories are shared, laughter echoes, and memories are made.</p>
                    </div>

                    <div className='card'>
                        <div><img src={mandir}></img></div>
                        <div className='heading'>Mandir</div>
                        <p className='paragraph'>The mandir is not just a sacred space, it's a gateway to the divine.</p>
                    </div>


                </div>

            </div>

        </section>
    )
}
