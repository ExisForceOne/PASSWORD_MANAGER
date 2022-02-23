import style from './PassContainer.module.css';

export default function PassContainer(props){

    return(
        <>
        <h4 className={style.header}>Your keys:</h4>
        <div className={style.grid}>
            {props.children}
        </div>
        </>
    )
}