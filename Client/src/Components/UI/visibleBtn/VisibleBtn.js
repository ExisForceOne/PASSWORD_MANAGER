import { FaEye, FaEyeSlash } from 'react-icons/fa'

export default function VisibleBtn(props){

    const styledBtn = {
        padding: '15px',
        display: 'flex',
        justyfiContent: 'center',
        alignItems: 'center',
        fontSize: '1.25em'
    }

    const onClickHandler = () => {

        const state = props.state.passwordIsVisible
        const setState = props.state.setPasswordIsVisible

        setState(!state)
    }



    return (
        <button
         style={styledBtn}
         onClick={()=>{onClickHandler()}} 
        >
            {
                props.state.passwordIsVisible
                ? <FaEyeSlash />
                : <FaEye />
            }
        </button>
    )
}