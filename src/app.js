import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import WelcomeComponent from './welcomeComponent'

function App() {
   return (
      <Router>
         <Switch>
            <Route exact path='/' component={WelcomeComponent}/>
         </Switch>
      </Router>
   );
}

export default App;