import React, { useState } from "react";
import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  const navigate = useNavigate();

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
          <Link to="/createpost">Create Post</Link>
          {!isAuth ? (
            <Link to="/login">Login</Link>
          ) : (
            <button onClick={logoutUser}>Log Out</button>
          )}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
