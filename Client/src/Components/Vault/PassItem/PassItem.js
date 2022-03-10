import style from './PassItem.module.css'
import changeTextColor from '../../../Helpers/changeTextColor'
import { FaStar } from 'react-icons/fa'

export default function PassItem(props) {

    const styledItem = {
        backgroundColor: props.color || 'white',
        color: changeTextColor(props.color) || 'white'
    }


    return (
        <div style={styledItem} className={style.item}>
        <span>{props.name}</span>
        {
        props.fav
        ? <FaStar className={style.icon} />
        : null
        }
        </div>
    )
}