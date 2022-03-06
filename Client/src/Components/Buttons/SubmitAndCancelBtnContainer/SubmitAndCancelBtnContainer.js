import style from './SubmitAndCancelBtnContainer.module.css'
import BackBtn from '../Buttons/BackBtn/BackBtn'
import LoadingSubmitBtn from '../Buttons/LoadingSubmitBtn/LoadingSubmitBtn'

export default function SubmitAndCancelBtnContainer(props){

    return (
    <div className={style.btnContainer}>
        <BackBtn  text={props.backText} onClick={props.backOnClick} />  
        <LoadingSubmitBtn loading={props.submitLoading} text={props.submitText} /> 
    </div>
    )
}