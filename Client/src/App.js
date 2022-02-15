import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from './Pages/Auth/Login/Login';
import Register from './Pages/Auth/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard';
import AuthLayout from "./Layout/AuthLayout/AuthLayout";
import DashboardLayout from "./Layout/DashboardLayout/DashboardLayout"
import Vault from "./Pages/Vault/Valut";

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
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='vault' element={<Vault />} />
          </Route>
        </Routes>
    </>
  );
}

export default App;
