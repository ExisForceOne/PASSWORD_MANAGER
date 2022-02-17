
export default function PassItem(props) {

    const styledItem = {
        border: '1px solid red',
        padding: '10px',
        backgroundColor: props.color || 'white',
        display: 'flex',
        justifyContent: 'space-between'
    }

    return (
        <div style={styledItem}>
        <span>{props.name}</span>
        {
        props.fav
        ? <span>ulubione</span>
        : null
    }
        </div>
    )
}