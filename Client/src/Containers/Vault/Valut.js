import { Route, Routes } from "react-router-dom";
import Home from './Home/Home'
import Add from './Add/Add';
import Edit from './Edit/Edit';
import Details from './Details/Details'
import NotFound from "../../Components/NotFound/NotFound";



export default function Vault(props){

    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path="add" element={<Add />}/>
                <Route path="edit" element={<Edit />}/>
                <Route path="details" element={<Details />}/>
                <Route path="*" element={<NotFound />} />     
            </Routes>
        </div>
    )
}
