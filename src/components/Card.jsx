import React from 'react';
import {Link} from 'react-router-dom'
import style from './Card.module.css';

export default function Card({max,min,name,img,onClose,id}) {
    // acá va tu código
      return(
          <div className={style.box}>   
              <button id={style.button} onClick={onClose}>X</button>
  
            <Link to={`/ciudad/${id}`} className={style.link}>
              <h1 className={style.nombreCiudad}>{name}</h1>
              <div>
                  <h3 className={style.nombreCiudad}>Min {min}° Max {max}° </h3>
                  {/* <h3>Max {max} </h3> */}
                  <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="clima" />
              </div>
            </Link>
          </div>
      )
  }