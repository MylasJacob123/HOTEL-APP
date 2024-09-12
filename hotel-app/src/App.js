import Register from "./components/register";
import Login from "./components/login";
import ForgotPassword from "./components/forgotpassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Rooms from "./components/rooms"
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
