 import {Routes, Route} from "react-router-dom";
 import Home from "./src/components/Home/Home";
 import React from 'react';
 import Signin from "./src/components/Signin/Signin";
 import User from "./src/components/User/User";

 function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signin' element={<Signin />}/>
        <Route path='/user' element={<User />}/>
      </Routes>
    </div>
  )
}

export default App;