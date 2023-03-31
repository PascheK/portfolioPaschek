import React from 'react'

import {About, Footer, Header, Skills, Work, Futur} from './container';
import {Navbar} from './components';
import { Helmet } from 'react-helmet-async';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
    <Helmet>
      <title>Killian Portfolio | Full-Stack Developper</title>
      <meta
      name="description"
      content="Explore Killian's portfolio, showcasing expertise in Web, App and more... Discover innovative projects, key skills, and my experiences for your needs."/>
     <link rel='canonical' href='/'/>
    </Helmet>
    <Navbar/>
      <Header/>
      <About/>
      <Futur />
      <Work/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App