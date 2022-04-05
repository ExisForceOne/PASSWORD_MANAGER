import style from './EditBtn.module.css'
import { RiEdit2Fill as PencilIcon } from 'react-icons/ri'


export default function EditBtn(props){

    return (
        <button className={style.btn}>
        edit
        <PencilIcon className={style.icon} />    
        </button>
    )
}