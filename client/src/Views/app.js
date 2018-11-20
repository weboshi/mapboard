import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import Organization from './Organization';
import { RegistrationPage } from './Registration/registration-view';
import { LoginPage } from './Login/Login-view';
import { Navigation } from '../Components/Navbar/navbar';
import { ProfilePage } from './Profile/profile-view';
import { MyPinsPage } from './MyPins/mypins-view';
import { Footer } from '../Components/Footer/footer'
import { WelcomePage } from './Welcome/welcome-view';
import './app.scss'

export default props =>

<BrowserRouter>
  <div className="app">
  <Navigation/>
    <div className="app-main">
    <Route path="/welcome" component={WelcomePage}/>
    <Route exact path="/" component={Home}/>
    <Route path="/organization" component={Organization}/>
    <Route path="/login" component={LoginPage}/>
    <Route path="/register" component={RegistrationPage}/>
    <Route path='/profile' component={ProfilePage}/>
    <Route path="/myPins" component={MyPinsPage}/>
    </div>
    <Footer/>
  </div>
</BrowserRouter>
