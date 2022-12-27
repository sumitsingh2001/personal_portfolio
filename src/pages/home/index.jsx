
import React, { useEffect } from 'react';
import { Counter, Company } from '../../components'
import { Header, Services, Skills, Projects, Footer } from '../../pages'


const Home = () => {
  return (
    <>
      <div className='app_container'>
        <Header />
        <Company />
        <Services />
        <Skills />
        <Projects />
        <Counter />
        <Footer />
      </div>
    </>
  )
}

export default Home