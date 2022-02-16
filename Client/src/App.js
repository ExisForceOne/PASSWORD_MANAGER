import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from './Pages/Auth/Login/Login';
import Register from './Pages/Auth/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard';
import AuthLayout from "./Layout/AuthLayout/AuthLayout";
import DashboardLayout from "./Layout/DashboardLayout/DashboardLayout"
import Vault from "./Pages/Vault/Valut";
import Analysis from "./Pages/Analysis/Analysis"

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
