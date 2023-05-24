import SearchBar from "../searchbar/SearchBar";

import style from './style.module.css';

function Nav(props) {
    const random = () => {
        let randomId = Math.floor(Math.random() * 826);
        props.onSearch(randomId);
    }

    return ( 
        <div className={style.navContainer}>
            <button className={style.randomButton} onClick={random}>Random</button>
            <SearchBar onSearch={props.onSearch}/>
        </div>
    );
}

export default Nav;