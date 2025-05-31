import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Hero from "./components/Hero";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import SendCompliment from "./components/SendCompliment";
import ReceiveCompliment from "./components/ReceiveCompliment";
import AboutUs from "./components/AboutUs";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/hero" element={<Hero />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login  />} />
      <Route path="/sendcompliment" element={<SendCompliment />} />
      <Route path="/receivecompliment" element={<ReceiveCompliment />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
};

export default App;
