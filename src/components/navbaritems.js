import React from 'react';

export const NavbarItems = ({page, logout}) => {
   if (page === "add" || page === 'view') {
      return (
         <div className="navbar-nav ml-4 w-100">
            {page === 'view' ? <a href="/view" className='nav-item nav-link current'>View</a> : <a href="/view" className='nav-item nav-link'>View</a>}
            {page === 'add' ? <a href="/add" className='nav-item nav-link current'>Add</a>: <a href="/add" className='nav-item nav-link'>Add</a>}
            <div className='w-100'>
               <button type='button' className='btn btn-primary float-right' id='logoutBtn' onClick={logout}>Logout</button>
            </div>
         </div>
      );
   } else if (page === 'welcome') {
      return (
         <div className='w-100'>
            <a href="/login"><button type='button' className='btn btn-primary float-right' id='loginBtn'>Login</button></a>
         </div>
      );
   } else {
      return <div></div>;
   }
}