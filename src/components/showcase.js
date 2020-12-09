import React from 'react';

export const Showcase = () => {
   return (
      <div id='showcaseContainer' className='vh-100 p-5'>
         <div id='showcaseText' className='rounded p-5 m-5'>
            <h1 className='text-center'>Simple Vehicle Management</h1>
            <p>
               Welcome to Car Tracker! The easy to use car tracking software. If you already have
               an account please login using the button in the top right corner of the screen.
            </p>
         </div>
      </div>
   );
}