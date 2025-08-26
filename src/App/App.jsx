import { useState, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../Pages/Home";
import Create from "../Pages/Create";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

const App = () => {
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("isLogin") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isLogin", isLogin ? "true" : "false");
  }, [isLogin]);

  return (
    <div className="select-none">
      <BrowserRouter>
        <Header isLogin={isLogin} setIsLogin={setIsLogin} />

        <Routes>
          <Route
            path="/"
            element={isLogin ? <Home /> : <Navigate to="/login" replace />}
          />
          <Route path="/login" element={isLogin?<Navigate to="/" replace/>:<Login setIsLogin={setIsLogin} />} />
          <Route path="/signUp" element={isLogin?<Navigate to="/" replace/>:<SignUp setIsLogin={setIsLogin} />} />
          <Route
            path="/create"
            element={isLogin ? <Create /> : <Navigate to="/login" replace />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
