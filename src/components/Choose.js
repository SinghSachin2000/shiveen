import React from 'react'
import logo from '../img/logo.png'
import house from '../img/house.png'
import bedroom from '../img/icons8-bedroom-interior-48.png'
import bathroom from '../img/icons8-bath-94.png'
import Kit from '../img/icons8-kitchen-room-48.png'
import Dinning from '../img/icons8-dining-room-48.png'
import mandir from '../img/icons8-hindu-swastik-48.png'


export default function Choose() {
    return (
        <section className='secComponent'>
            <div className='chooseitem'>
                <div className='headingChoose'>
                    <h1>Design Services</h1></div>

                <div className='firstDiv'>

                    <div className='card'>
                        <div><img src={house}></img></div>
                        <div className='heading'>Exterior Design</div>
                        <p className='paragraph'>This is a short description elaborating the service you have mentioned above.</p>
                    </div>

                    <div className='card'>
                    <div><img src={bedroom}></img></div>
                        <div className='heading'>Bedroom</div>
                        <p className='paragraph'>This is a short description elaborating the service you have mentioned above.</p>
                    </div>

                    <div className='card h-[50rem]'>
                    <div><img className='bathroom w-[5rem]' src={bathroom}></img></div>
                        <div className='heading'>Bathroom</div>
                        <p className='paragraph'>This is a short description elaborating the service you have mentioned above.</p>
                    </div>

                    <div className='card'>
                    <div><img src={Kit}></img></div>
                        <div className='heading'>Kitchen</div>
                        <p className='paragraph'>This is a short description elaborating the service you have mentioned above.</p>
                    </div>

                    <div className='card'>
                    <div><img src={Dinning}></img></div>
                        <div className='heading'>Dinning & Drawing Room</div>
                        <p className='paragraph'>This is a short description elaborating the service you have mentioned above.</p>
                    </div>

                    <div className='card'>
                    <div><img src={mandir}></img></div>
                        <div className='heading'>Mandir</div>
                        <p className='paragraph'>This is a short description elaborating the service you have mentioned above.</p>
                    </div>

                </div>

            </div>

        </section>
    )
}
