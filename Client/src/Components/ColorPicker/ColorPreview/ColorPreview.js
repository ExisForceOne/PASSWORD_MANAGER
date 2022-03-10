export default function ColorPreview(props){

    const styledDiv = {
        width:'100%',
        height: '20vh',
        background: props.color
    }

    return (
        <div style={styledDiv}></div>
    )
}