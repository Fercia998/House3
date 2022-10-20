import React from 'react'
import Visa from './img/Visa.png';
import './Paiement.css';
import {Link} from 'react-router-dom';

export default function Paiement() {
  return (
    <div className='grant'>
        <div className='top'>
            {/* <h1>Paiement</h1> */}
        </div>
        <div className='bigmother'>
            <div className='smallchild'>
            <input className='Bor' type="text"  placeholder='Nom'/>
            <input className='Bor' type="text"  placeholder='Prenom'/>
            <input className='Bor' type="email"  placeholder='Email'/>
            <input className='Bor' type="tel"  placeholder='Phone'/>

        </div>
            <div>< img src={Visa} alt='' className='visa' ></img></div>
            <div className='bas'>
                <span>Nom sur la carte</span>

                </div>
                <div><input className='bor' type="text"  placeholder='Nom'/> </div> 
                <div className='bas3'><span >Num de carte</span></div>
                <div className=''><input className=' bor ' type="number"  placeholder='  ....   ....  ....  ....'/></div>
                <div className='bas4'><span>Date d'expiration</span> <span>  Cryptogramme</span>
                </div>
                <div className='sp'><input type="date"  /><input className='taille' type="number"  placeholder='  ....'/></div>

        </div>
        <button className='mar3 of '><Link className='sol' to='/Paiement2'>Payer</Link></button>
        
    </div>
  )
}
