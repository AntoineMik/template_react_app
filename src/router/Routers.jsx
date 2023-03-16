import React from 'react';
import{ Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home/Home';
import Gallery from '../pages/Gallery/Gallery';
import Boutique from '../pages/Boutique/Boutique';
import Custom from '../pages/Custom/Custom';
import Members from '../pages/Members/Members';
import NoMatch from '../pages/NoMatch/NoMatch';
import Authentication from '../pages/Authentication/Authentication';
import RequireAuth from '../pages/Authentication/RequireAuth';
import AuthProvider from '../pages/Authentication/AuthProvider';
import Settings from '../pages/Settings/Settings';
import Orders from '../pages/Orders/Orders';
import Profile from '../pages/Profile/Profile';
import Account from '../pages/Account/Account';



const Routers = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route exact path='/authenticate' element={<Authentication/>}></Route>
          <Route path='/Home' element={<Home/>} />
          <Route path='/Gallery' element={<Gallery/>} />
          <Route path='/Boutique' element={<Boutique/>} />
          <Route path='/Custom Order' element={<Custom/>} />
          <Route path='/profile' 
            element={ <RequireAuth><Profile/></RequireAuth>} 
          />
          <Route path='/account' 
            element={ <RequireAuth><Account/></RequireAuth>} 
          />
          <Route path='/orders' 
            element={ <RequireAuth><Orders/></RequireAuth>} 
          />
          <Route path='/settings' 
            element={ <RequireAuth><Settings/></RequireAuth>} 
          />
          <Route path="*" element={<NoMatch/>} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default Routers