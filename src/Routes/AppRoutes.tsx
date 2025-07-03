import { Route, Routes } from "react-router";
import Home from "../pages/Homepage/Home";
import Login from "../pages/Loginpage/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
