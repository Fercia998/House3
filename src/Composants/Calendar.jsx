
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./Calendar.css"
import {Link} from 'react-router-dom';




export default function Calendrier() {
  const [value, onChange] = useState(new Date());

  return (
    <div className='mere'>
    <div className='top'>
    <div className=''>
      <Calendar onChange={onChange} value={value} className='calendrier ' />
    </div> 
    </div>
    <div className='mere2'>
    <div> <span>Date</span></div> 
     <div className='mar'><span>21 Octobre 2022</span> <span>-</span> <span>23 Octobre 2022</span></div>
      <div className='mar' ><span>Invites</span></div>
      <span>Adultes</span><select name="" id="">
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
        <option value="">4</option>
        <option value="">5</option>

      </select>
      <span className='fatherinpt mar'>Enfants</span><select name="" id="">
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
        <option value="">4</option>
        <option value="">5</option>

      </select>
    <div className='mar'><span>Chambres</span></div>
        <div>
          <select className='children' name="" id="">
            <option value="">1 Chambre</option>
            <option value="">2 Chambres</option>
            <option value="">3 Chambres</option>
            <option value="">4 Chambres</option>
            <option value="">5 Chambres</option>

          </select>
        </div>

    </div>
    <button className='mar2'><Link className='o' to='/Paiement'>Suivant</Link></button>

    </div>
  );
}