import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navbar from './Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Footer from './Footer'

function App() {
  return (
    <div id="page-container">
      <div id="content-wrap">
        < Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/About' component={About} />
          <Route exact path='/Service' component={Service} />
          <Route exact path='/Contact' component={Contact} />
          <Redirect to='/' />
        </Switch>
        <Footer />
      </div >
    </div >
  )
}

export default App
