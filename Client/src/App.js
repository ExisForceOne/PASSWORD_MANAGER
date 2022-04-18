import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthContext from "./Contexts/AuthContext";
import SuccessMsgContext from "./Contexts/SuccessMsgContext";

import ProtectedDashboardLayout from "./Layout/ProtectedDashboardLayout/ProtectedDashboardLayout";
import LoginAndRegisterLayout from "./Layout/LoginAndRegisterLayout/LoginAndRegisterLayout";

import Login from "./Containers/Auth/Login/Login";
import Register from "./Containers/Auth/Register/Register";

import Vault from "./Containers/Vault/Valut";
import Details from "./Containers/Details/Details";
import Add from "./Containers/AddAndEdit/Add/Add";
import Edit from "./Containers/AddAndEdit/Edit/Edit";
import Analysis from "./Containers/Analysis/Analysis";
import NotFound from "./Components/NotFound/NotFound";
import SuccessInfo from "./Components/SuccessInfo/SuccessInfo";

function App() {
  const [authUser, setAuthUser] = useState(null);
  const [successMsg, setSuccessMsg] = useState("");

  return (
    <>
      <AuthContext.Provider value={{ authUser, setAuthUser }}>
        <SuccessMsgContext.Provider value={{ successMsg, setSuccessMsg }}>
          <Routes>
            <Route element={<LoginAndRegisterLayout />}>
              <Route path="/" element={<Navigate to="login" />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>

            <Route element={<ProtectedDashboardLayout />}>
              <Route path="vault" element={<Vault />} />
              <Route path="details/:id" element={<Details />} />
              <Route path="add" element={<Add />} />
              <Route path="edit/:id" element={<Edit />} />
              <Route path="analysis" element={<Analysis />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
          <SuccessInfo />
        </SuccessMsgContext.Provider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
