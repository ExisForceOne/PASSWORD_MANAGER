import style from './PassItem.module.css'
import { FaStar } from 'react-icons/fa'

export default function PassItem(props) {

    const bgc = {
        backgroundColor: props.color || 'white'
    }


    return (
        <div style={bgc} className={style.item}>
        {props.name}
        {
        props.fav
        ? <FaStar className={style.icon} />
        : null
        }
        </div>
    )
}