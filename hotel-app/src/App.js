import Register from "./components/register";
import Login from "./components/login";
import ForgotPassword from "./components/forgotpassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Facilities from "./components/facilities"
import Rooms from "./components/rooms";
import About from "./components/about";
import './App.css';
import RoomDisplay from "./components/roomdisplay";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/roomdisplay" element={<RoomDisplay />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
