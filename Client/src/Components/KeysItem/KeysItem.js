import style from './KeysItem.module.css'
import changeTextColor from '../../Helpers/changeTextColor'

import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import CollapseWeaknessList from '../Analysis/CollapseWeaknessList/CollapseWeaknessList'

export default function KeysItem(props) {

    const styledItem = {
        backgroundColor: props.color || 'white',
        color: changeTextColor(props.color) || 'white'
    }

    return (
        // fav to up
        <div style={{order: props.fav || 2}}> 
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
            {
                props.strength?.weekness.length
                ? <CollapseWeaknessList weakness={props.strength.weekness} />
                : null
            }
        </div>

    )
}