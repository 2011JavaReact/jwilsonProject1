import {NavbarItems} from './navbaritems'
import car from '../images/car.png';

export const Navbar = (props) => {

   return (
      <div id='navbarContainer'>
         <nav className="navbar navbar-expand bg-dark">
            <a href="/" id='navtitle' className='navbar-brand'>
               <img src={car} alt="Car icon" id='caricon' className='d-inline-block align-top' />
               <h1 className='d-inline-block align-bottom ml-2'>Car Tracker</h1>
            </a>
            <NavbarItems page={props.page} />
         </nav>
      </div>
   );
}