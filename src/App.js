import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './home'
import Character from './character'

function App() {
  return (
   <Router>
      <Routes>
        <Route exact path = '/' element={<Home/>}></Route>
        <Route  path = ':id' element={ <Character/>}></Route>
      </Routes>
  </Router>
  );
}

export default App;
