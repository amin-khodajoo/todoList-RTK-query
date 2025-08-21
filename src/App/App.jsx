import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../Pages/Home";
import Create from "../Pages/Create";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import { useState } from "react";

const App = () => {
  const [login, setLogin] = useState(false);
  return (
    <div className="select-none">
      <BrowserRouter>
        <Header login={login} setLogin={setLogin} />

        <Routes>
          <Route
            path="/"
            element={login ? <Home /> : <Navigate to={"/login"} replace />}
          />
          <Route
            path="/login"
            element={<Login login={login} setLogin={setLogin} />}
          />
          <Route path="/signUp" element={<SignUp />} />
          <Route
            path="/create"
            element={login ? <Create /> : <Navigate to="/login" replace />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
