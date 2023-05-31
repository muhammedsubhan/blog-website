import React, { useState } from "react";
import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const navigate = useNavigate();

  // Logout User and Clear User from Local Storage
  const logoutUser = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };

  return (
    <>
      <div>
        <nav>
          <Link to="/">Home</Link>

          {!isAuth ? (
            <Link to="/login">Login</Link>
          ) : (
            <>
              <Link to="/createpost">Create Post</Link>
              <button onClick={logoutUser}>Log Out</button>
            </>
          )}
        </nav>
        <Routes>
          <Route path="/" element={<Home isAuth={isAuth} />} />
          <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
