import { Routes, Route } from "react-router-dom";
import Home from "./Containers/Home/Home";
import Login from './Containers/Auth/Login/Login';
import Register from './Containers/Auth/Register/Register';
import AuthLayout from "./Layout/AuthLayout/AuthLayout";
import DashboardLayout from "./Layout/DashboardLayout/DashboardLayout"
import Vault from "./Containers/Vault/Valut";
import Analysis from "./Containers/Analysis/Analysis"

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
            <Route path='analysis' element={<Analysis />} />
          </Route>
          
        </Routes>
    </>
  );
}

export default App;
