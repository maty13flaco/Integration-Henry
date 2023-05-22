import style from './style.module.css';

export default function SearchBar(props) {
   return (
      <div className={style.searchContainer}>
         <input className={style.searchInput} type='search' />
         <button className={style.searchButton} onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
