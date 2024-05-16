import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
import Error from './Pages/Error/Error';

const App = () => {
   //managing state for sidebar expand
  const[sidebarEx, setSidebarEx] = useState(true)

  return (
    <div>
      <Navbar setSidebarEx={setSidebarEx} />
      <div>
        <Routes>
          <Route path='/' element={<Home sidebarEx={sidebarEx} />} />
          <Route path='/watch/:categoryId/:videoId' element={<Video />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;