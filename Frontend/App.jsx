 import {Routes, Route} from "react-router-dom";
 import Home from "./src/Routes/Home/Home";
 import React from 'react';
 import Signin from "./src/Routes/Signin/Signin";
 import User from "./src/Routes/User/User";

 import "./src/assets/css/main.css";
 import Footer from "./src/components/Footer/Footer";
 import Navbar from "./src/components/Navbar/Navbar";
 

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