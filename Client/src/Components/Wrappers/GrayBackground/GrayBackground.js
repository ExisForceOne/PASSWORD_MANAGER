import style from './GrayBackground.module.css'


function GrayBackground(props){

    return (
        <div className={style.container}>
            <div className={style.content}>
                {props.children}
            </div>
        </div>
    )
}

export default GrayBackground