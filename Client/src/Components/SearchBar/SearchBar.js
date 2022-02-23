import style from './SearchBar.module.css'
import { FaSearch } from 'react-icons/fa';

const iconCenter = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

export default function SearchBar(props){

    return (
        <form className={style.form}>
            <input 
             type="text"
             placeholder="Search..."
            />
            <button style={iconCenter} >
            <FaSearch />
            </button>
        </form>
    )
}
