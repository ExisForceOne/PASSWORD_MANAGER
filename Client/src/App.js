import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthContext from "./Contexts/AuthContext";

import ProtectedDashboardLayout from "./Layout/ProtectedDashboardLayout/ProtectedDashboardLayout"
import LoginAndRegisterLayout from "./Layout/LoginAndRegisterLayout/LoginAndRegisterLayout";

import Home from "./Containers/Home/Home";
import Login from './Containers/Auth/Login/Login';
import Register from './Containers/Auth/Register/Register';

import Vault from "./Containers/Vault/Valut";
import Details from "./Containers/Details/Details";
import Add from "./Containers/AddAndEdit/Add/Add";
import Edit from "./Containers/AddAndEdit/Edit/Edit";
import Analysis from "./Containers/Analysis/Analysis"
import NotFound from "./Components/NotFound/NotFound";

function App() {

  const [authUser, setAuthUser] = useState(null);


  return (
    <>
      <AuthContext.Provider value={{authUser, setAuthUser}}>

        <Routes>

            <Route element={<LoginAndRegisterLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
            
            <Route element={<ProtectedDashboardLayout />}> 
              <Route path='vault' element={<Vault />} />
              <Route path="details/:id" element={<Details />}/>
              <Route path="add" element={<Add />}/>
              <Route path="edit" element={<Edit />}/>
              <Route path='analysis' element={<Analysis />} />    
            </Route>

            <Route path="*" element={<NotFound />} />    

        </Routes>

      </AuthContext.Provider>        
    </>
  );
}

export default App;
