import style from './SearchBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function SearchBar(props){

    return (
        <form className={style.form}>
            <input 
             type="text"
             placeholder="Search..."
            />
            <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </form>
    )
}
