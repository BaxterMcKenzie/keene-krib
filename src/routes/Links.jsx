import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Contact from '../pages/Contact';

const Links = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<Contact/>}/>
    </Routes>
  )
}

export default Links;
