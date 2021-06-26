import React from 'react'

import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from  'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact  component={Home}/>
        <Route path="/services" exact  component={Services}/>
        <Route path="/products" exact  component={Products}/>

      </Switch>
    </Router>
     
   </>
  );
}

export default App;
