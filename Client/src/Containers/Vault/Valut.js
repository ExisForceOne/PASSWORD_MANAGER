import { Route, Routes } from "react-router-dom";
import Home from './Home/Home'
import Add from './Add/Add';
import Edit from './Edit/Edit';
import Details from './Details/Details'


const container = {
    width: '100%',
    fontSize: '1.5rem',
    padding: '10px'
}

export default function Vault(props){

    return (
        <div style={container}>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path="add" element={<Add />}/>
                <Route path="edit" element={<Edit />}/>
                <Route path="details" element={<Details />}/>
            </Routes>
        </div>
    )
}
