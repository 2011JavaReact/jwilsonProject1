import React from 'react';

export const NavbarItems = (props) => {
   if (props.page === "add" || props.page === 'view') {
      return (
         <div className="navbar-nav ml-4">
            {props.page === 'view' ? <a href="/view" className='nav-item nav-link current'>View</a> : <a href="/view" className='nav-item nav-link'>View</a>}
            {props.page === 'add' ? <a href="/add" className='nav-item nav-link current'>Add</a>: <a href="/add" className='nav-item nav-link'>Add</a>}
         </div>
      );
   } else if (props.page === 'welcome') {
      return (
         <div className='w-100'>
            <a href="/login"><button type='button' class='btn btn-primary float-right' id='loginBtn'>Login</button></a>
         </div>
      );
   } else {
      return <div></div>;
   }
}