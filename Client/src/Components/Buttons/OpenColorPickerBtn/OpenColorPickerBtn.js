import changeTextColor from "../../../Helpers/changeTextColor"

export default function OpenColorPickerBtn(props){


    const styledBtn = {
        backgroundColor: props.color,
        padding: '10px',
        margin: '5px 0 15px',
        color: changeTextColor(props.color),
        borderRadius: '8px',
    }

    return (
        <button 
        style={styledBtn}
        type='button'
        {...props}
        
        >Open Color Picker</button>
    )
}