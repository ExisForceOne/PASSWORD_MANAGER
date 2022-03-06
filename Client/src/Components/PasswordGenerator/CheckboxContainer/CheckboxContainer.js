import { forwardRef } from "react"
import style from './CheckboxContainer.module.css'

const CheckboxContainer = forwardRef( (props, ref)=>{


    const styledDiv = {
        margin: '15px 0',
    }


    return (
        <div className={style.container} ref={ref}>
            <p>Include:</p>
        
            {props.children}
        </div>
    )
})

export default CheckboxContainer