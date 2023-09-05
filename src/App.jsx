import React from 'react'
import { Navber } from './components/Navber';
import { Hero } from './components/Hero'
import { HeadlineCards } from './components/HeadlineCards';
import { Food } from './components/Food'


function App() {
  
  return (
    <div>
      <Navber />
      <Hero />
      <HeadlineCards />
      <Food />
    </div>
  )
}

export default App;
