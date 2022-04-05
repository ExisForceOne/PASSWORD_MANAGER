import style from './DeleteBtn.module.css'
import { RiDeleteBin2Fill as TrashIcon } from 'react-icons/ri'


export default function DeleteBtn(props){

    return (
        <button className={style.btn}>
        <TrashIcon className={style.icon} />    
        </button>
    )
}