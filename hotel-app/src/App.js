import Register from "./components/register";
import Login from "./components/login";
import ForgotPassword from "./components/forgotpassword";
import './App.css';

function App() {
  return (
    <div className="App">
      <Register />
      <Login />
      <ForgotPassword />
    </div>
  );
}

export default App;
