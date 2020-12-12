import React, { useState } from 'react';
import Car from './car';

export const View = ({ cars, search }) => {

   const [name, setName] = useState('');

   return (
      <div id='viewContainer' className='w-100 h-100 px-5'>
         <div id='tableContainer' className='p-3 m-3'>
            <div id='searchContainer' className='bg-dark p-1'>
               <h2 className='text-center'>Cars View</h2>
               <form className="form-inline float-right">
                  <input className="form-control mr-sm-2" type="text" value={name} placeholder="Search" onChange={(e) => setName(e.target.value)}/>
                  <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={() => search(name)}>Search</button>
               </form>
            </div>
            <table id='cartable' className='m-auto table table-sm table-responsive-sm table-dark table-striped table-bordered table-hover'>
               <thead>
                  <tr>
                     <th>Car</th>
                     <th>Price</th>
                  </tr>
               </thead>
               <tbody id='viewBody'>
                  {cars.map((c) => <Car c={c} key={c.id} />)}
               </tbody>
            </table>
         </div>
      </div>
   );
}