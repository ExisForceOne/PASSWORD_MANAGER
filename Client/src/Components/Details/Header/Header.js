import style from './Header.module.css'
import { FaStar } from 'react-icons/fa'

export default function Header(props){

    const bgc = {
        backgroundColor: props.color || 'white'
    }

    return (
        <div style={bgc} className={style.container} >
            <div className={style.nameContainer}>
            <p>{props.name}</p>
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