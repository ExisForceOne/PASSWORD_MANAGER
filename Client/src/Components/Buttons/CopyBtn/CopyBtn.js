import style from './CopyBtn.module.css'
import copyToClipboard from '../../../Helpers/copyToClipboard'
import { FaCopy as CopyIcon } from 'react-icons/fa'
import { useRef } from 'react'

export default function CopyBtn(props){

    const confirmMsg = useRef()

    const showAndHideConfirmMsg = () =>{
        const visibleTime = 1200 //ms
        const span = confirmMsg.current;
        
        span.style.display= 'block';

        setTimeout(()=>{
            span.style.display= 'none';
        },visibleTime)
    }

    function onClickHandler(){
        showAndHideConfirmMsg()
        copyToClipboard(props.value)
    }

    return (
        <button
         onClick={()=>onClickHandler()}
         className={style.btn}
        >
            <CopyIcon />
        
            <span
             className={style.confirmMsg}
             ref={confirmMsg}
             >Copied!
            </span>
            
        </button>
    )
}