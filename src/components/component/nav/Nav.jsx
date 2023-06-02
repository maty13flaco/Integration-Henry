import { Link, useLocation } from "react-router-dom"; 

import SearchBar from "../searchbar/SearchBar";

import style from './style.module.css';

function Nav(props) {
    const location = useLocation().pathname;
    
    // const random = () => {
    //     let randomId = Math.floor(Math.random() * 826);
    //     props.onSearch(randomId);
    // }

    return location !== "/" ? ( 
        <div className={style.navContainer}>
            <div>
                <Link className={style.randomButton} to="/home">Home</Link>
                <Link className={style.randomButton} to="/favorites">Favorites</Link>
                <Link className={style.randomButton} to="/about">About</Link>
            </div>
            {/* <button className={style.randomButton} onClick={random}>Random</button> */}
            <SearchBar onSearch={props.onSearch}/>
        </div>       
    ):("");
}

export default Nav;