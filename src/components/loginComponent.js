import React from 'react';
import '../css/loginStyles.css';
import car from '../images/car.png';
import {Navbar} from './navbar';
import Axios from 'axios';
import {Redirect} from 'react-router-dom';


export default class LoginComponent extends React.Component {

   constructor(props) {
      super(props);
      this.state = {isLoggedIn: false, error: ''};
   }

   login = (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      // const url = `http://18.191.134.205:8080/cars/login?username=${username}&password=${password}`;
      const url = `http://localhost:8080/cars/login?username=${username}&password=${password}`;

      Axios.post(url, {},{withCredentials: true})
      .then(res => {
         if (res.status === 200) {
            this.setState({...this.state, isLoggedIn: true});
         }
      }).catch(e => {
         this.setState({...this.state, error: 'Incorrect Username or Password'});
      });
   }

   render() {
      if (this.state.isLoggedIn) {
         return <Redirect to='/view'/>;
      }
      return (
         <div className='m-0 h-100'>
            <Navbar page='login'/>
            <div id="logincontainer" className='container vh-100 w-100 p-5'>
               <div id="loginbox" className='row align-items-center justify-content-center h-100'>
                  <div className="border border-dark rounded-lg bg-dark p-md-4 p-sm-1 m-md-auto m-sm-0 mt-5 shadow-lg text-center w-50">
                     <img src={car} alt="Car icon" id='cariconLogin' />
                     <h1 id='formtitle' className='text-center'>Car Tracker</h1>
                     <h3 id='loginError' className='text-center error'>{this.state.error}</h3>
                     <hr />
                     <form id="loginform" className='px-5' onSubmit={this.login}>
                        <div className="form-group input-group p-2 mb-2">
                           <input type="text" className="form-control" placeholder="Username" id='username' required />
                        </div>
                        <div className="form-group input-group p-2 mb-2">
                           <input type="password" className="form-control" placeholder="Password" id='password' required />
                        </div>
                        <button type='submit' className='btn btn-login btn-lg'>Login</button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}