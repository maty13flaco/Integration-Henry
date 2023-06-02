import { useEffect, useState } from 'react';

import axios from 'axios';
import {Routes, Route, useNavigate} from 'react-router-dom'


import './App.css';
import Home from './components/views/Home'
import About from './components/views/About'
import Detail from './components/views/detail/Detail'
import Nav from './components/component/nav/Nav';
import Form from './components/component/form/Form';
import Favorites from './components/views/Favorites';


function App() {
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const EMAIL = "email@email.com"
   const PASSWORD = "pass1234"
   const navigate = useNavigate()


   const login = (userData) => {
     if(userData.email === EMAIL && userData.password === PASSWORD){
      setAccess(true)
      navigate('/home')
     }
   }

   useEffect(() => {
     !access && navigate("/");
   }, [access]);

   const onSearch = (id) => {
     axios(`https://rickandmortyapi.com/api/character/${id}`).then(
       ({ data }) => {
         if (data.name && !checkRepeated(data.id)) {
           setCharacters((oldChars) => [...oldChars, data]);
           navigate('/home')
         } else if (checkRepeated(data.id)) {
           window.alert("¡Este personaje ya está en la lista!");
         } else {
           window.alert("¡No hay personajes con este ID!");
         }
       }
     );
   };

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
            <Route path='/' element={<Form login={login}/>}></Route>
            <Route path='/home' element={<Home characters={characters} onClose={onClose}/>}></Route>
            <Route path='/favorites' element={<Favorites onClose={onClose}/>} ></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/detail/:id' element={<Detail />}></Route>
         </Routes>
      </div>
   );
}

export default App;
