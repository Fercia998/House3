import React from 'react';
import './Choishotel.css';
import Bambou from '../pages/image/Bambou.png'
import Vector from '../pages/image/Vector.png'
import Monitor from '../pages/image/Monitor.png'
import Wifi from '../pages/image/Wifi.png'
import Group from '../pages/image/Group.png'
import Tv from '../pages/image/Tv.png'
import Coffee from '../pages/image/Coffee.png'
import Mapb from '../pages/image/Mapb.png'
import Love from '../pages/image/Love.png'
import {Link} from 'react-router-dom';


export default function Choishotel() {
  return (
    <div className='bigmadre'>
      <div className='contentelement' >
        <img className='firststape' src={Bambou} alt="" />
        <div className='Titre'>
          <h1>Hotel Bambou</h1>
          <div className='Vec'><img className='Firstvector' src={Vector} alt="" /> </div>
          <div className='Loveparent' ><img className='Love'  src={Love} alt="" /></div>
         <div className='Titre2'><h1>Abela,quartier Sobraga</h1></div>
         <p>Au calme, idéalement situé dans le triangle aéroport, port, centre ville. Studios et chambres meublés. Location au mois et à la journée. TV, wifit.</p>
        </div>
        <div className='Thevector'>
          <div className='Monitor'>
            <span className='child'>Monitor</span>
            <img className='monitor' src={Monitor} alt="" />
            </div>
            <div className='Monitor'>
            <span className='child'>Wifi</span>
            <img className='monitor' src={Wifi} alt="" />
            </div>
            <div className='Monitor'>
            <span className='child'>Piscine</span>
            <img className='monitor smallgroup' src={Group} alt="" />
            </div>
            <div className='Monitor'>
            <span className='child'>Tv</span>
            <img className='monitor' src={Tv} alt="" />
            </div>
            <div className='Monitor'>
            <span className='child'>Coffee</span>
            <img className='monitor' src={Coffee} alt="" />
            </div>
      </div>
      <div className='madre'>
        <img className='Lastsexion'  src={Mapb} alt="" />
        <button className='reserver'><Link className='no' to='/Chambres'>Reserver</Link></button>

      </div>

      </div>
      
    </div>
    
  )
}
