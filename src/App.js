import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Contacts from './components/contacts/Contacts.jsx';
import Header from './components/layout/Header.jsx';
import AddContacts from './components/contacts/AddContacts.jsx';
import EditContact from './components/contacts/EditContact.jsx';
import About from './components/pages/About.jsx';
import NotFound from './components/pages/404NotFound.jsx';
import Test from './components/test/Test.jsx';

import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  render(){
    return(
      <Provider>
        <Router>
          <div>
            <Header branding = "Contact Management System"/>
            <div className="container">
              <Switch>
                <Route exact path="/" component = {Contacts}/>           
                <Route exact path="/contact/add" component = {AddContacts}/>           
                <Route exact path="/contact/edit/:id" component = {EditContact}/>           
                <Route exact path="/about" component = {About}/>           
                <Route exact path="/test" component = {Test}/>           
                <Route component = {NotFound}/>                       
              </Switch>
            </div>        
          </div>
        </Router>        
      </Provider>      
    );
  }
}

export default App;
