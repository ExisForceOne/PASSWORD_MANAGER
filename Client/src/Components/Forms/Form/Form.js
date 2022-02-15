
const titleStyles= {
    fontSize: '1.5rem',
    marginBottom: '10px',
}

const formStyles = {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '1.2rem',
        padding: '20px',
        maxWidth: '750px',
        margin: '0 auto'
}

export default function Form(props){

    return (
        <>
        <h3 style={titleStyles}>{props.title}</h3>
        <form style={formStyles} onSubmit={props.onSubmit}>
            {props.children}
        </form> 
        </>

    )
}
