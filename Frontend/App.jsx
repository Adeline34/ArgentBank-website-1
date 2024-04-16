 import {Routes, Route} from "react-router-dom";
 import Home from "./src/components/Home/Home";
 import React from 'react';

 function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App;