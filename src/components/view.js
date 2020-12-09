import React from 'react';

export const View = (props) => {
   return (
      <div id='viewContainer' className='w-100 h-100 px-5'>
         <div id='tableContainer' className='p-3 m-3 bg-dark rounded'>
            <table className='m-auto'>
               <tr>
                  <th>Car</th>
                  <th>Price</th>
               </tr>
               <tr>
                  <td>Dummy Data</td>
                  <td>Dummy Data</td>
               </tr>
               <tr>
                  <td>Toyota Tacoma</td>
                  <td>26150</td>
               </tr>
               <tr>
                  <td>Ford F-150</td>
                  <td>28745</td>
               </tr>
            </table>
         </div>
      </div>
   );
}