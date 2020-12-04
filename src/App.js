import React from 'react';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import ContentUX from './Components/ContentUX';
import ContextCopyWrite from './Components/ContextCopyWrite';
import ContentWriting from './Components/ContentWriting';
import Samples from './Components/Samples';
import Reviews from './Components/Reviews';
import Chatbot from './Components/Chatbot';
import Contact from './Components/Contact';
import About from './Components/About';
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <NavBar />
      <Header />
      <ContentUX />
      <ContextCopyWrite />
      <ContentWriting />
      <About />
      <Chatbot />
      <Samples />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
