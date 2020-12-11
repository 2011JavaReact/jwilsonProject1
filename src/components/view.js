import React, {useEffect } from 'react';
import Axios from 'axios';

export const View = (props) => {

   const getCars = () => {
      // fetch('http://18.191.134.205:8080/cars/cars')
      //    .then(res => res.json())
      //    .then(data => addCars(data));

      Axios.get('http://18.191.134.205:8080/cars/cars', {}, {withCredentials: true, headers: {'Access-Control-Allow-Origin': 'http://localhost:3000'}})
      .then(res => addCars(res.data));
   }

   const addCars = data => {
      let element = document.createElement('tr');
      data.array.forEach(d => {
         element.innerHTML += `<td>${d.name}<td><td>$${d.price.toFixed(2)}<td>`;
      });
      document.getElementById('cartable').appendChild(element);
   }

   useEffect(() => {
      getCars();
   }, []);

   return (
      <div id='viewContainer' className='w-100 h-100 px-5'>
         <div id='tableContainer' className='p-3 m-3'>
            <table id='cartable' className='m-auto table table-sm table-responsive-sm table-dark table-striped table-bordered table-hover'>
               <thead>
                  <tr>
                     <th>Car</th>
                     <th>Price</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Dummy Data</td>
                     <td>Dummy Data</td>
                  </tr>
                  <tr>
                     <td>Toyota Tacoma</td>
                     <td>$26150.00</td>
                  </tr>
                  <tr>
                     <td>Ford F-150</td>
                     <td>$28745.00</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   );
}