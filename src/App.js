import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import CheckKesMental from "./pages/CheckKesMental";
import "./assets/css/styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Articles from "./pages/Articles";
import StartCekKes from "./pages/StartCekKes";
import Konseling from "./pages/Konseling";
import Soal from "./pages/Soal";
import ProfileUser from "./components/ProfileUser";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cek-kesehatan-mental" element={<CheckKesMental />} />
        <Route path="/start-cek-kesehatan-mental" element={<StartCekKes />} />
        <Route path="/soal-cek-kesehatan-mental/:index" element={<Soal />} />
        <Route path="/konseling-ms-wellbeing" element={<Konseling />} />
        <Route path="/profile-user" element={<ProfileUser/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
