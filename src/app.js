import React, { useState } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginComponent from './components/loginComponent';
import WelcomeComponent from './components/welcomeComponent';
import { ViewComponent } from './components/viewComponent'
import { AddComponent } from './components/addComponent';

const App = () => {
   const [isAuthenticated, setAuthenticated] = useState({});


   const login = async (e, username, password) => {
      e.preventDefault();
      const url = `http://18.191.134.205:8080/cars/login?username=${username}&password=${password}`;
      // const url = `http://localhost:8080/cars/login?username=${username}&password=${password}`;

      await Axios.post(url, {}, { withCredentials: true })
         .then(res => {
            if (res.status === 200) {
               setAuthenticated({ auth: true, msg: '' });
            }
         }).catch(err => {
            console.log(err);
            setAuthenticated({ ...isAuthenticated, msg: 'Incorrect Username or Password' });
         });
   }

   const logout = (history) => {
      const url = `http://18.191.134.205:8080/cars/logout`;

      fetch(url, {
         credentials: 'include'
      })
      .then(res => {
         if (res.status === 200) {
            setAuthenticated(false);
         }
      });
      history.push('/');
   }

   return (
      <Router>
         <Switch>
            <Route exact path='/' component={WelcomeComponent} />
            <Route exact path='/index.html' component={WelcomeComponent} />
            <Route exact path='/login'>
               <LoginComponent login={login} isAuthenticated={isAuthenticated} />
            </Route>
            <Route exact path='/view'>
               <ViewComponent logout={logout}  />
            </Route>
            <Route exact path='/add'>
               <AddComponent logout={logout} />
            </Route>
         </Switch>
      </Router>
   );
}

export default App;