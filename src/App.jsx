import React from 'react'
import { Navber } from './components/Navber';
import { Hero } from './components/Hero'
import { HeadlineCards } from './components/HeadlineCards';
import { Food } from './components/Food'
import { Category } from './components/Category';


function App() {
  
  return (
    <div>
      <Navber />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
    </div>
  )
}

export default App;
