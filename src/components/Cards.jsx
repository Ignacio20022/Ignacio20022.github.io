import React from 'react';
import Card from './Card';
import style from './Cards.module.css'

export default function Cards({ cities, onClose }) {
    return (
      <div className={style.allCards}>
        {cities && cities.length > 0 ? (
          cities.map((c) => (
            <Card
              key={c.id}
              max={c.max}
              min={c.min}
              name={c.name}
              img={c.img}
              onClose={() => onClose(c.id)}
              id={c.id}
            />
          ))
        ) : (
          <h1>No hay ciudades</h1>
        )}
      </div>
    );
  }
  