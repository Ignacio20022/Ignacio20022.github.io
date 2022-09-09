import React, { useState } from "react";
import "./App.css";
import Nav from "../components/Nav";
import Cards from "../components/Cards";
import axios from "axios";
import About from "../components/About";
import Ciudad from "../components/Ciudad";
import { Route } from "react-router-dom";

export default function App() {
  // espacio para codigo - React.useState()
  // estado para mantener un arreglo de ciudades
  const apiKey2 = "4ae2636d8dfbdc3044bede63951a019b";
  const apiKey = "9f9f3f739d45de984b26d3e9d1a527c2";
  const [ciudades, setCiudades] = useState([]);

  function onSearch(ciudad) {
    axios(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
    ).then((respuesta) => {
      if (respuesta.data.main !== undefined) {
        const ciudad = {
          min: Math.round(respuesta.data.main.temp_min),
          max: Math.round(respuesta.data.main.temp_max),
          img: respuesta.data.weather[0].icon,
          id: respuesta.data.id,
          wind: respuesta.data.wind.speed,
          temp: respuesta.data.main.temp,
          name: respuesta.data.name,
          weather: respuesta.data.weather[0].main,
          clouds: respuesta.data.clouds.all,
          latitud: respuesta.data.coord.lat,
          longitud: respuesta.data.coord.lon,
        };
        const oldCity = ciudades.find(ciudadIngresada => ciudadIngresada.id === ciudad.id)
        if(!oldCity) {
            setCiudades(oldCities => [...oldCities, ciudad]);
        }
        else {alert("La ciudad ingresada ya se encuentra agregada")}
      } 
    //   else if(!respuesta.data){
    //     alert("Ciudad no encontrada");
    //   }
    }).catch(err => {
        alert('ciudad no encontrada')
    })
  }

  function onFilter(ciudadId){
    let ciudad = ciudades.filter((c) => c.id === parseInt(ciudadId))

    if(ciudad.length>0){
        return ciudad[0]
    }
    else return null;
  }

  function onClose(id) {
    setCiudades((estadoAnterior) =>
      estadoAnterior.filter((el) => el.id !== id)
    );
  }

  return (
    <div className="App">
    <Route path='/'>
      <Nav onSearch={onSearch} />
    </Route>
    <Route exact path='/about'
        component={About}
    />
    <Route
        exact 
        path='/'
        render={() => <Cards cities={ciudades} onClose={onClose} />}
    />
    {/* <Route component={Ciudad}/> */}
    <Route exact path='/ciudad/:id'>
        <Ciudad onFilter={onFilter}/>
    </Route>
    </div>
  );
}