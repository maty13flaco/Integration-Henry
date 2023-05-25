import { useState } from 'react';

import axios from 'axios';
import {Routes, Route} from 'react-router-dom'


import './App.css';
import Home from './components/views/Home'
import About from './components/views/About'
import Detail from './components/views/Detail'
import Nav from './components/component/nav/Nav';


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
         <Routes>
            <Route path='/' element={<Home characters={characters} onClose={onClose}/>}></Route>
            <Route path='/home' element={<Home characters={characters} onClose={onClose}/>}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/detail/:id' element={<Detail />}></Route>
         </Routes>
      </div>
   );
}

export default App;
