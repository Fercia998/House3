import React from 'react';
import Hotel from './img/Hotel.jpg';
import Stars from './img/Stars.png';
import Chercher from './img/Chercher.png';
import './hotel.css';
import {Link} from 'react-router-dom';


export default function () {
  return (
    <div className='mere'>
    <div className='top'>
    {/* <blink>Retour</blink> */}
        <h1>Rechercher un hotel</h1>
        <div className='searchbar'>
            <input type="text"  />
            <button><img className='Chercher' src={Chercher} alt="" /></button>
        </div>
    </div>
    <div className='boximg'>
    <div className='smallbox' >
        <img src={Hotel} alt="Hotel" />
        <div className='boxspan'>
            <span className='texte'><Link to='/Choishotel'>Meridien Mandji</Link></span> <br />
            <span className='texte'>Bord de Mer face a Beac</span>
         <img className='stars' src= {Stars} alt="" />
         <span className='texte'>301 avis</span>
        </div>
    </div>

    <div className='smallbox' >
        <img src={Hotel} alt="Hotel" />
        <div className='boxspan'>
            <span className='texte'><Link to='/Choishotel'>Meridien Mandji</Link></span> <br />
            <span className='texte'>Bord de Mer face a Beac</span>
            <img className='stars' src= {Stars} alt="" />
            <span className='texte'>93 avis</span>


        </div>
    </div>

    <div className='smallbox' >
        <img src={Hotel} alt="Hotel" />
        <div className='boxspan'>
            <span className='texte'><Link to='/Choishotel'>Meridien Mandji</Link></span> <br />
            <span className='texte'>Bord de Mer face a Beac</span>
            <img className='stars' src= {Stars} alt="" />
            <span className='texte'>501 avis</span>


        </div>
    </div>
    
    <div className='smallbox' >
        <img src={Hotel} alt="Hotel" />
        <div className='boxspan'>
            <span className='texte'><Link to='/Choishotel'>Meridien Mandji</Link></span> <br />
            <span className='texte'>Bord de Mer face a Beac</span>
            <img className='stars' src= {Stars} alt="" />
            <span className='texte'>301 avis</span>


        </div>
    </div>
    <div className='smallbox' >
        <img src={Hotel} alt="Hotel" />
        <div className='boxspan'>
            <span className='texte'><Link to='/Choishotel'>Meridien Mandji</Link></span> <br />
            <span className='texte'>Bord de Mer face a Beac</span>
            <img className='stars' src= {Stars} alt="" />
            <span className='texte'>301 avis</span>


        </div>
    </div>

    <div className='smallbox' >
        <img src={Hotel} alt="Hotel" />
        <div className='boxspan'>
            <span className='texte'><Link to='/Choishotel'>Meridien Mandji</Link></span> <br />
            <span className='texte'>Bord de Mer face a Beac</span>
            <img className='stars' src= {Stars} alt="" />
            <span className='texte'>301 avis</span>


        </div>
    </div>
    </div>



    

    
    </div>
  )
}
