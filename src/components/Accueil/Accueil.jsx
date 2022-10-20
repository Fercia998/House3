import React from "react"
import Capture from "./Capture.PNG";
import "./Accueil.css";
import {Link} from 'react-router-dom';




export const Accueil = () => {
  return (
    <div >
      <div className="accueil">
        <img className="logo" src={Capture} alt="" />
      </div>
      <div className="house">
        <h2>HOUSE MANDJI</h2>
      </div>
      <div className="h3">
        Sentez-vous comme chez vous!!!
      </div> <br></br>
      <button className='exp'><Link className="dec" to= '/hotel'>Explorons</Link></button>
    </div>


  )
}
export default Accueil