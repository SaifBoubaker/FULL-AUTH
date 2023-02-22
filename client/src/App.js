import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { ToastContainer } from "react-toastify";
import AllUsers from "./Pages/AllUsers";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="user/register" element={<Register />} />
          <Route path="user/login" element={<Login />} />
          <Route path="users" element={<AllUsers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
