import React from 'react';
import {BrowserRouter as Router,  Routes, Route,Link} from 'react-router-dom';

import Home from "./pages/Home";
import About  from "./pages/About";
const App=() =>{
  return(
    <>
        <Router>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>

          
          <Routes>
            <Route exact path="/" component={<Home/>}/>
            <Route path="/about" component={<About/>}/>
          </Routes>
        </Router>
    </>

  );
 
}

export default App;