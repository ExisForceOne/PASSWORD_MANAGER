import style from './KeysItem.module.css'
import changeTextColor from '../../Helpers/changeTextColor'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function KeysItem(props) {

    const styledItem = {
        backgroundColor: props.color || 'white',
        color: changeTextColor(props.color) || 'white'
    }


    return (
        <Link to={`/details/${props._id}`} >
            <div style={styledItem} className={style.item}>
                <span>{props.name}</span>
                    {
                    props.fav
                    ? <FaStar className={style.icon} />
                    : null
                    }
            </div>
        </Link>

    )
}