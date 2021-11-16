import React, { Component } from 'react'
import './Minhalista.css';
import Assistido from '../Assistido/Assistido'


export default function Minhalista(props) {
    return (
        <main className="container">
          <div>
            {props.filmesList.map((filme) => (
              <Assistido key={`filme__${filme.id}`} id={filme.id} 
              title={filme.title} description={filme.description} year={filme.year} cast={filme.cast} director={filme.director}
              reloadData={props.loadData}>
                {filme.content}
              </Assistido>
            ))}
          </div>
        </main>
      );
    }

