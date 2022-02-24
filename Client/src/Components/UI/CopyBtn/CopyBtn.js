import style from './CopyBtn.module.css'
import copyToClipboard from '../../../Helpers/copyToClipboard'
import { FaCopy as CopyIcon } from 'react-icons/fa'

export default function CopyBtn(props){

    return (
        <button onClick={()=>copyToClipboard(props.value)} className={style.btn}><CopyIcon /></button>
    )
}