import React from 'react';

export const NavbarItems = (props) => {
   if (props.page === "add") {
      return (
         <div className="navbar-nav ml-4">
            <a href="/view" className='nav-item nav-link'>View</a>
            <a href="/add" className='nav-item nav-link'>Add</a>
         </div>
      );
   } else if (props.page === 'view') {
      return (
         <div className='d-flex justify-content-between w-100'>
            <div className="navbar-nav mx-4 mr-auto">
               <a href="/view" className='nav-item nav-link'>View</a>
               <a href="/add" className='nav-item nav-link'>Add</a>
            </div>
            <form className="form-inline">
               <input className="form-control mr-sm-2" type="text" placeholder="Search" />
               <button className="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
            </form>
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