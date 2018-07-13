import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import ButtonSearch from '../components/button-search';
import PokemonCard from '../components/pokemon-card';
import Header from '../components/header';
import InputSearch from '../components/input-search';
import Loading from '../components/loading';
import Logo from '../components/logo';

import Pikachu from '../assets/pokemons/025.png'

const pokemonMock = {
  id: 25,
  num: '025',
  name: 'Pikachu',
  img: Pikachu,
  type: ['Electric'],
  height: '0.41 m',
  weight: '6.0 kg',
  candy: '50 Pikachu Candy',
  egg: '2 km',
  multipliers: 2.34,
  weaknesses: [
     'Ground'
  ],
  next_evolution: [
     {
        num: '026',
        name: 'Raichu'
     }
  ]
}

const typePokemons = [
  { id: 1, types: ['Bug', 'Grass', 'Rock', 'Ground', 'Normal'], icon: 'fa fa-leaf' },
  { id: 2, types: ['Fire'], icon: 'fa fa-free-code-camp' },
  { id: 3, types: ['Poison', 'Water'], icon: 'fa fa-tint' },
  { id: 4, types: ['Electric'], icon: 'fa fa-bolt' },
  { id: 5, types: ['Ice'], icon: 'fa fa-snowflake-o'},
  { id: 6, types: ['Bug'], icon: 'fa fa-bug'},
]

storiesOf('Components', module)
  .add('button-search', () => <ButtonSearch buttonName='Search'/>)
  .add('pokemon-card', () => <PokemonCard pokemon={pokemonMock} typePokemons={typePokemons}/>)
  .add('header', () => <Header />)
  .add('input-search', () => <InputSearch />)
  .add('loading', () => <Loading />)
  .add('logo', () => <Logo />);  