import React from 'react'
import '../css/loginStyles.css'
import car from '../images/car.png';
import {Navbar} from './navbar'


export default class LoginComponent extends React.Component {

   login() {
      console.log('test');
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      fetch(`http://18.191.134.205:8080/cars/login?username=${username}&password=${password}`, {
         method: 'POST',
         mode: 'cors'
      }).then(resp => Response.json())
      .then(data => {
         console.log(data);
      });
   }

   render() {
      return (
         <div className='m-0'>
            <Navbar page='login'/>
            <div id="logincontainer" className='container h-100 w-100 p-5'>
               <div id="loginbox" className='row align-items-center justify-content-center h-100'>
                  <div className="border border-dark rounded-lg bg-dark p-md-4 p-sm-1 m-md-auto m-sm-0 mt-5 shadow-lg text-center w-50">
                     <img src={car} alt="Car icon" id='cariconLogin' />
                     <h1 id='formtitle' className='text-center'>Car Tracker</h1>
                     <hr />
                     <form id="loginform" className='px-5'>
                        <div className="form-group input-group p-2 mb-2">
                           <input type="text" className="form-control" placeholder="Username" id='username' required />
                        </div>
                        <div className="form-group input-group p-2 mb-2">
                           <input type="password" className="form-control" placeholder="Password" id='password' required />
                        </div>
                        <button type='button' className='btn btn-login btn-lg' onClick={() => {this.login()}}>Login</button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}