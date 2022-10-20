import React from "react";
import "./Chambres.css";
import { FaSwimmer } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { CCarousel } from "@coreui/react";
import { CCarouselItem } from "@coreui/react";
import { CImage } from "@coreui/react";
import Chambre1 from "./images/Chambre1.png";
import Chambre2 from "./images/Chambre2.png";
import Chambre3 from "./images/Chambre3.png";
import Chambre4 from "./images/Chambre4.png";
import "@coreui/coreui/dist/css/coreui.min.css";
import double from "./images/double.jpg";
import single from "./images/single.jpg";
import simple from "./images/simple.jpg";
import suite from "./images/suite.webp";
import {Link} from 'react-router-dom';




export const Chambres = () => {
  return (
    <div>
      <div>
        <div className="linear">
        </div>
      </div>
      <div>
         <CCarousel controls indicators className="slide">
          <CCarouselItem className="box-item">
            <CImage
              className="box-item"
              src={Chambre1} 
              alt=""
            />
          </CCarouselItem>

          <CCarouselItem className="box-item">
            <CImage
              className="box-item"
              src={Chambre2}
              alt="slide 2"
            />

          </CCarouselItem>

          <CCarouselItem className="box-item">
            <CImage
              className="box-item"
              src={Chambre3}
              alt="slide 2"
            />

          </CCarouselItem>

          <CCarouselItem className="box-item">
            <CImage
              className="box-item"
              src={Chambre4}
              alt="slide 3"
            />

          </CCarouselItem>
        </CCarousel> 

      </div><br />


      <div>
        <div className="chambre">
          <p>
            Situé à Libreville, à 1,5 km de la statue nationale de l'abolition
            de l'esclavage, l'Hotel Hibiscus Blvd Triomphal propose un
            restaurant, un parking privé gratuit et un bar. Vous séjournerez à
            quelques pas du parc national d'Akanda et à 2,6 km de la base de
            Loisirs. La réception est ouverte 24h/24 et un service de change est
            assuré. Les chambres sont dotées d'un balcon avec vue sur la ville.
            Elles sont également équipées de la climatisation et d'une
            télévision à écran plat.
          </p>
          <div className="icons">
            <FaSwimmer size={30} />
            <FaTv size={30} />
            <FaUtensils size={30} />
            <FaWifi size={30} />
          </div>
        </div>
      </div>
      <div>
        <div className="prix">
          <h1>Prix</h1>
          <div className="lit">
            <h3><Link to='/Calendar'>Chambre standard</Link></h3>
            <div className="total">
            <img src={single} alt="" /><br /><br />
            <p className="montant">150.000 FCFA</p>
            </div>
            <p>Votre chambre dispose d’un grand lit, d’un service à thé et à café, ainsi que d’un accès Wi-Fi gratuit.</p>

          </div>
          <div className="lit">
            <h3>Chambre exécutive avec accès au salon</h3>
            <div className="total">
            <img src={double} alt="" /><br /><br />
            <p className="montant">178.000 FCFA</p>
            </div>
            <p>Notre chambre Exécutive invite les hôtes à se détendre dans leur coin salon baigné de lumière naturelle, avec une vaste sélection de boissons dans le minibar .</p>

          </div>
          <div className="lit">
            <h3><Link to='/Calendar'>Chambre Supérieure avec vue sur la mer</Link></h3>
            <div className="total">
            <img src={simple} alt="" /><br /><br />
            <p className="montant">200.000 FCFA</p>
            </div>
            <p>Pour profiter de plus d’espace, réservez l’une de nos chambres Supérieures. Avec la machine à expresso dans la chambre, pas question d'attendre pour déguster votre première tasse de café. Tous les équipements dont vous avez besoin vous attendent dans votre chambre. </p>

          </div>
          <div className="lit">
            <h3><Link to='/Calendar'>Suite Junior avec accès au salon</Link></h3>
            <div className="total">
            <img src={suite} alt="" /><br /><br />
            <p className="montant">256.000 FCFA</p>
            </div>
            <p>Ces suites comprennent des chambres et des salons séparés, l’hébergement idéal pour les longs séjours. Avec une salle de bains bien équipée, une douche à effet pluie, un peignoir et des chaussons.</p>

          </div>
        </div>
      </div>
      <button className="mar3">Réserver</button>
    </div>
  );
};

export default Chambres;
