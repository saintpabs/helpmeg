import React from 'react';
import  Navbar  from './Components/Navbar'
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Coaches from './Pages/Coaches';
import Buddies from './Pages/Buddies';
import Search from './Pages/Search';
import Community from './Pages/Community';
import { Route, Routes } from 'react-router-dom';

function App() { 
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Pages/login" element={<Login />} />
          <Route path="/Pages/signup" element={<Signup />} />
          <Route path="/Pages/coaches" element={<Coaches />} />
          <Route path="/Pages/buddies" element={<Buddies />} />
          <Route path="/Pages/search" element={<Search />} />
          <Route path="/Pages/community" element={<Community />} />
        </Routes>
      </div>
    </>
  );
}

export default App; 



