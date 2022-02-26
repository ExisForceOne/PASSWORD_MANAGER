import style from './Input.module.css'

function Input(props){

    return (
        <div className={style.container}>
            <label className={style.label} htmlFor={props.id}>{props.label}</label>
            <input 
                className={style.input}
                id={props.id}
                name={props.name}
                type={props.type}
                onChange={props.onChange}
                onBlur={props.onBlur}
                value={props.value}

                step={props.step}
                min={props.min}
                />
            {props.error ? <div className={style.error}>{props.error}</div> : null}
        </div>
    )
}

function Textarea(props){

    return (
        <div className={style.container}>
            <label className={style.label} htmlFor={props.id}>{props.label}</label>
            <textarea 
                className={style.input} 
                cols="30" 
                rows="5"
                id={props.id}
                name={props.name}
                onChange={props.onChange}
                onBlur={props.onBlur}
                value={props.value}
                />
            {props.error ? <div className={style.error}>{props.error}</div> : null}
        </div>
    )
}


function InputCheckbox(props){

    return (
        <div className={style.container}>
            <input 
            className={style.checkbox} 
            type="checkbox" 
            id={props.id} 
            onChange={props.onChange}
            checked={props.checked}
            value={props.value}
            />
            <label className={style.label} htmlFor={props.id}>{props.label}</label>
        </div>
    )
}



export { Input, Textarea, InputCheckbox }