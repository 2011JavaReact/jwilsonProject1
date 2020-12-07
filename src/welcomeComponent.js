import React from 'react'
import car from './images/car.png';


export class WelcomeComponent extends React.Component {

   render() {
      return (
      <div className="App">
         <header>
         <nav className="navbar bg-dark">
            <a href="index.html" id='navtitle'>
               <img src={car} alt="Car icon" id='caricon' className='d-inline-block align-top'/>
               <h1 className='d-inline-block align-bottom ml-2'>Car Tracker</h1>
            </a>
            <button type='button' className='btn btn-primary float-right' id='loginBtn' onClick={this.props.onClick}>Login</button>
         </nav>
         </header>
         <main>

         </main>
      </div>
      );
   }
}