import { Route, Routes } from "react-router";
import Home from "../pages/Homepage/Home";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/Sign-up";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  );
};

export default AppRoutes;
