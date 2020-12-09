import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginComponent from './components/loginComponent';
import WelcomeComponent from './components/welcomeComponent';
import {ViewComponent} from './components/viewComponent'
import { AddComponent } from './components/addComponent';


function App() {
   return (
      <Router>
         <Switch>
            <Route exact path='/' component={WelcomeComponent}/>
            <Route exact path='/index.html' component={WelcomeComponent}/>
            <Route exact path='/login' component={LoginComponent} />
            <Route exact path='/view' component={ViewComponent} />
            <Route exact path='/add' component={AddComponent} />
         </Switch>
      </Router>
   );
}

export default App;