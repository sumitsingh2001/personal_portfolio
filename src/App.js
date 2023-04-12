import "./App.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Contact, Home, Nothing } from "./pages";
import { BannerMain } from "./components";
import Loader from "./components/Loader";

// import WOW from 'wowjs';
const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wow.js") : null;

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    new WOW().init();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<BannerMain />} />
            <Route path="/about" element={<Home />} />
            <Route path="/portfolio" element={<About />} />
            {/* <Route path='/contact' element={<Contact />} /> */}
            <Route path="*" element={<Nothing />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
