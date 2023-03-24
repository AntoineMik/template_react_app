import React from 'react';
import{ Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home/Home';
import Services from '../pages/Services/Services';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import NoMatch from '../pages/NoMatch/NoMatch';




const Routers = () => {
  return (
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/Services' element={<Services/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path="*" element={<NoMatch/>} />
        </Route>
      </Routes>
  )
}

export default Routers