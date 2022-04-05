import style from './Header.module.css'
import { FaStar } from 'react-icons/fa'

import changeTextColor from '../../../Helpers/changeTextColor'

export default function Header(props){

    const bgc = {
        backgroundColor: props.color || 'white'
    }

    return (
        <div style={bgc} className={style.container} >
            <div className={style.nameContainer}>
            <p style={{color: changeTextColor(props.color)}}>{props.name}</p>
            {
                props.fav
                ? <FaStar className={style.starIcon} />
                : null
            }
            </div>
            <div className={style.btnContainer}>
                {props.children}
            </div>

        </div>
    )
}