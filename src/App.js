import './App.css';
import { Header, Footer, Services, Skills, Projects } from './pages';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useEffect } from 'react';
import { Company, Counter } from './components';

// import WOW from 'wowjs';
const isServer = typeof window === 'undefined';
const WOW = !isServer ? require('wow.js') : null;

function App() {
  useEffect(() => {
    new WOW().init();
  }, []);

  return (
    <>
      <div className='app_container'>
        <Header />
        <Services />
        <Skills />
        <Company />
        <Projects />
        <Counter />
        <Footer />
      </div>
    </>
  );
}

export default App;
