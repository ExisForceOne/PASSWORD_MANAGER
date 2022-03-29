import style from './FetchError.module.css'

export default function FetchError(props){
    return (
        <div className={style.container}>
            <p>{props.message}</p>
        </div>
    )
}

