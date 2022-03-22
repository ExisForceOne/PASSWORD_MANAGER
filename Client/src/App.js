import { Routes, Route } from "react-router-dom";

import DashboardLayout from "./Layout/DashboardLayout/DashboardLayout"
import AuthLayout from "./Layout/AuthLayout/AuthLayout";

import Home from "./Containers/Home/Home";
import Login from './Containers/Auth/Login/Login';
import Register from './Containers/Auth/Register/Register';

import Vault from "./Containers/Vault/Valut";
import Details from "./Containers/Details/Details";
import Add from "./Containers/Add/Add";
import Analysis from "./Containers/Analysis/Analysis"
import NotFound from "./Components/NotFound/NotFound";
import Edit from "./Containers/Edit/Edit";

function App() {
  return (
    <>
        <Routes>

          <Route element={<AuthLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          
          <Route element={<DashboardLayout />}> 
            <Route path='vault' element={<Vault />} />
            <Route path="details" element={<Details />}/>
            <Route path="add" element={<Add />}/>
            <Route path="edit" element={<Edit />}/>
            <Route path='analysis' element={<Analysis />} />    
          </Route>
            <Route path="*" element={<NotFound />} />            
        </Routes>
    </>
  );
}

export default App;
