import style from './SearchBar.module.css'
import { FaSearch } from 'react-icons/fa';

export default function SearchBar(props){


    function onSubmit(e) {
        e.preventDefault();
    }

    return (
        <form onSubmit={e=>onSubmit(e)}className={style.form}>
            <input 
             type="text"
             placeholder="Search..."
             onChange={(e)=>props.onSearch(e.target.value)}
            />
            <button  className={style.icon}>
            <FaSearch />
            </button>
        </form>
    )
}
