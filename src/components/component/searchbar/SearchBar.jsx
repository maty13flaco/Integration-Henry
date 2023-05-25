import { useState } from 'react';

import style from './style.module.css';

export default function SearchBar(props) {
   const [id, setId] = useState('');

   const handleChange = (e) => {
      setId(e.target.value);
   };

   return (
      <div className={style.searchContainer}>
         <input className={style.searchInput} type='search'  onChange={handleChange} value={id}/>
         <button className={style.searchButton} onClick={()=>{props.onSearch(id)}}>Agregar</button>
      </div>
   );
}
