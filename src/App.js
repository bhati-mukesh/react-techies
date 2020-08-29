import React from 'react';
import Navbar from './components/navbar/Navbar.component'
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/components/home/Home.component'
import About from './pages/components/about/About.component'
import Services from './pages/components/services/Services.component'
import Contact from './pages/components/contact/Contact.component'
import Footer from './components/footer/Footer.component'

const App= () => {
  return (
    <>
    <div className="App">
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/services' component={Services} />
      <Redirect to='/' />
    </Switch>
    <Footer />
    </div>
    </>
  );
}

export default App;
