import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CheckKesMental from "./pages/CheckKesMental";
import "./assets/css/styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Article from "./pages/Articles";
import StartCekKes from "./pages/StartCekKes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="article" element={<Article />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="cek-kesehatan-mental" element={<CheckKesMental />} />
        <Route path="start-cek-kesehatan-mental" element={<StartCekKes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;