 import { Routes, Route } from "react-router-dom";
 import Home from "./Routes/Home/Home";
 import React from 'react';
 import Signin from "./Routes/Signin/Signin";
 import User from "./Routes/User/User";

 import Footer from "./components/Footer/Footer";
 import Navbar from "./components/Navbar/Navbar";
 

 function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Signin' element={<Signin />}/>
        <Route path='/User' element={<User />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App;