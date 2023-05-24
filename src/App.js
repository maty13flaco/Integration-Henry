import { useState } from 'react';
import axios from 'axios';

import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav';

const example = {
   id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

function App() {
   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name && !checkRepeated(data.id)) {
            setCharacters((oldChars) => [...oldChars, data]);
         } 
         else if (checkRepeated(data.id)) {
            window.alert('¡Este personaje ya está en la lista!');
         }
         else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const checkRepeated = (id) => {
      return characters.some((char) => char.id === id);
   }

   const onClose = (id) => {
      setCharacters((oldChars) => oldChars.filter((char) => char.id !== id));
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;
