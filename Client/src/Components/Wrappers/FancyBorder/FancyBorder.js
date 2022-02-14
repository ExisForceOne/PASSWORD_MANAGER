import style from './FancyBorder.module.css'


function FancyBorder(props){

    return (
        <div className={style.back}>
            <div className={style.content}>
                {props.children}
            </div>
        </div>
    )
}

export default FancyBorder