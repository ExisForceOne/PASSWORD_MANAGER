import {Link} from 'react-router-dom'

import { IoMdAddCircleOutline as PlusIcon } from 'react-icons/io'

export default function AddNewKeyBtn(props){

    const styledBtn = {
        display: 'flex',
        jusitFyContent: 'center',
        alignItems: 'center',
        padding: '10px 20px',
        borderRadius: '8px',
        margin: '10px 0 0 10px',
        backgroundColor: '#28a745',
        color: 'white',
    }

    const styledIcon = {
        marginLeft: '5px',
    }


    return (
        <Link to='/add'>
            <button style={styledBtn}>Add <PlusIcon style={styledIcon} /></button>
        </Link>
    )
}