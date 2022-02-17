import style from './PassContainer.module.css';



export default function PassContainer(props){

    return(
        <div className={style.grid}>
            {props.children}
        </div>
    )
}