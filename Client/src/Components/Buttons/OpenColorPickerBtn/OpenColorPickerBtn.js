

export default function OpenColorPickerBtn(props){


    const styledBtn = {
        backgroundColor: props.color,
        padding: '10px',
        margin: '5px 0 15px',
        color: 'white',
        textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
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