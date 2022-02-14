import style from './Bar.module.css'


function Bar(props){

    return (
        <div className={style.bar}>
            <span></span>
            <span>or</span>
            <span></span>
        </div>
    )
}

export default Bar