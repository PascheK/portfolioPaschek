import React from 'react'

import {About, Footer, Header, Skills, Work, Futur} from './container';
import {Navbar} from './components';

import './App.scss';

const App = () => {
  return (
    <div className='app'>
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