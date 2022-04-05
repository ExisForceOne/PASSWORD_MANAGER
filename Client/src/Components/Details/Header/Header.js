import style from './Header.module.css'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import { RiEdit2Fill } from 'react-icons/ri'

export default function Header(props){

    const bgc = {
        backgroundColor: props.color || 'white'
    }

    return (
        <div style={bgc} className={style.container} >
            <p>{props.name}</p>
            {
                props.fav
                ? <FaStar className={style.starIcon} />
                : null
            }
            <Link to={`/edit/${props._id}`}>
                <button>
                edit
                <RiEdit2Fill className={style.editIcon} />    
                </button>
            </Link>
        </div>
    )
}