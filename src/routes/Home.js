import React from 'react'
import Navbar from '../components/Navbar'
import '../components/home.css';
import Textsec from '../components/Textsec';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <>
    <div>
      <Navbar/>
      <Textsec/>
      <Footer/>
    </div>
    </>
  );
};

export default Home;
