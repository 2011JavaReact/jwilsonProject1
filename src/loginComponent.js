import React from 'react'
import './css/loginStyles.css'
import car from './images/car.png';
import './css/bootstrap.css';


export class LoginComponent extends React.Component {

   render() {
      return (
      <div id="logincontainer" className='container h-100 w-100 p-5'>
      <div id="loginbox" className='row align-items-center justify-content-center h-100'>
         <div className="border border-dark rounded-lg bg-dark p-md-4 p-sm-1 m-md-auto m-sm-0 mt-5 shadow-lg text-center w-50">
            <img src={car} alt="Car icon" id='cariconLogin'/>
            <h1 id='formtitle' className='text-center'>Car Tracker</h1>
            <hr/>
            <form id="loginform" className='px-5'>
               <div className="form-group input-group p-2 mb-2">
                  <input type="text" className="form-control" placeholder="Username" required/>
               </div>
               <div className="form-group input-group p-2 mb-2">
                  <input type="password" className="form-control" placeholder="Password" required/>
               </div>
               <button type='button' className='btn btn-login btn-lg'>Login</button>
            </form>
         </div>
      </div>
   </div>);
   }
}