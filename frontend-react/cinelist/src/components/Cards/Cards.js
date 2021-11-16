import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Minhas recomendações</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/taxi-driver.jpg'
              text='Taxi Driver (1976) - Directed by Martin Scorsese'
              label='Drama, Ficção Policial'
              path='/filmes/taxidriver'
            />
            <CardItem
              src='images/pulp-fiction.jpg'
              text='Pulp Fiction (1993) - Directed by Quentin Tarantino'
              label='Drama, Comédia, Máfia'
              path='/filmes/pulpfiction'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/scarface.jpeg'
              text='Scarface (1983) - Directed by Brian De Palma'
              label='Máfia, Ação, Suspense'
              path='/filmes/scarface'
            />
            <CardItem
              src='images/clube-da-luta.jpg'
              text='Fight Club (1999) - Directed by David Fincher'
              label='Ação, Suspense, Drama'
              path='/filmes/clube-da-luta'
            />
            <CardItem
              src='images/rick-and-morty.jpg'
              text='Rick and Morty (2013) - Justin Roiland, Dan Harmon'
              label='Comédia, Sci-fi, Aventura'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;