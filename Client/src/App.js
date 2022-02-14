import Home from './Pages/Home/Home';
import Login from './Pages/Auth/Login/Login';
import Register from './Pages/Auth/Register/Register';
import { Routes, Route } from "react-router-dom";
import FancyBorder from './Components/Wrappers/FancyBorder/FancyBorder';
import Dashboard from './Pages/Dashboard/Dashboard'

function App() {
  return (
    <>
      <FancyBorder>
        <Routes>
          <Route path="/" element={<Home />}/> 
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path='dashboard' element={<Dashboard />} />
        </Routes>
      </FancyBorder>
    </>
  );
}

export default App;
