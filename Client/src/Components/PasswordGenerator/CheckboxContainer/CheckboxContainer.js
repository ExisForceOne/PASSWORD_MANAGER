import { forwardRef } from "react"


const CheckboxContainer = forwardRef( (props, ref)=>{


    const styledDiv = {
        margin: '15px 0',
    }


    return (
        <div style={styledDiv} ref={ref}>
            <p>Include:</p>
        
            {props.children}
        </div>
    )
})

export default CheckboxContainer