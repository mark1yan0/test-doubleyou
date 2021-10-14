import React from 'react';
import './App.css';
//react router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//components
import Header from './pages/components/Header';
import Hero from './pages/components/Hero';
import Footer from './pages/components/Footer';
import ScrollToTop from './utilities/ScrollToTop';
//pages
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contacts from './pages/Contacts';

function App() {
  return (
    <div className='App'>
      <Router>
        <ScrollToTop />
        <Header />
        <Switch>
          <Route exact path='/'>
            <Hero title='Convertitore di Valuta' page='home' />
            <HomePage />
          </Route>
          <Route path='/about'>
            <Hero title='Chi siamo' page='about' />
            <About />
          </Route>
          <Route path='/contacts'>
            <Hero title='Contattaci' page='contacts' />
            <Contacts />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
