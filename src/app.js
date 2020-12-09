import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import WelcomeComponent from './components/welcomeComponent'

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