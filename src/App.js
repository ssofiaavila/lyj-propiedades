import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Screens
import Landing from "./screens/landing.jsx";
import Inmuebles from "./screens/inmuebles.jsx";
// import About from "./screens/about.jsx"; // Nueva pantalla de ejemplo
// import Properties from "./screens/properties.jsx"; // Otra pantalla de ejemplo

export default function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/inmuebles" element={<Inmuebles />} />
        </Routes>
      </Router>
    </>
  );
}

// <Route path="/about" element={<About />} />
// <Route path="/properties" element={<Properties />} />
