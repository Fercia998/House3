import React from 'react';
import "./Paiement2.jsx";
import "./Paiement2.css";
import Message from'./pages/image/Message.png'
import {Link} from  'react-router-dom'





function Paiement2() {
  return (
    <div className="paiement" >
      <div className='top1' > <div className="confirm"><h1>Confirmation</h1></div> </div>
      <div className="reussite">
        <div className="ecrit">
          <p>150.000 F <br /> Transaction Réussie</p>
        </div>
        <div className="sms">
          <img className='sms2' src={Message} alt="" />
        </div>
        <div className="loren"><p>Lorem, rero dfered trudsferum pool </p></div>
       
      </div>
      <div button ><button className="hey "><Link className='xonline' to='/hotel'><p>Terminer</p></Link></button></div>
    </div>
  )
}

export default Paiement2
