import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import SendCompliment from "./components/SendCompliment";
import ReceiveCompliment from "./components/ReceiveCompliment";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login  />} />
      <Route path="/sendcompliment" element={<SendCompliment />} />
      <Route path="/receivecompliment" element={<ReceiveCompliment />} />
    </Routes>
  );
};

export default App;
