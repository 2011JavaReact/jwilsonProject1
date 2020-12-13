import React, { useEffect, useState } from 'react';
import { Navbar } from './navbar';
import { View } from './view';

export const ViewComponent = ({ logout, isAuthenticated }) => {

   const [cars, setCars] = useState([]);

   const getCars = () => {
      const url = 'http://18.191.134.205:8080/cars/cars';
      // const url = 'http://localhost:8080/cars/cars';

      fetch(url, {
         credentials: 'include'
      })
      .then(res => res.json())
      .then(data => setCars(data.cars));
   }

   const search = (e, val) => {
      e.preventDefault();
      let url;
      if (val === '') {
         getCars();
         return;
      } else if (parseInt(val)) {
         url = `http://18.191.134.205:8080/cars/cars?carId=${val}`;
      } else {
         url = `http://18.191.134.205:8080/cars/cars?carName=${val}`;
      }
      fetch(url, {
         credentials: 'include'
      })
      .then(res => res.json())
      .then(data => setCars(data));
   }

   const deleteCar = (id) => {
      const url = `http://18.191.134.205:8080/cars/cars?carId=${id}`;
      // const url = `http://localhost:8080/cars/cars?carId=${id}`;

      fetch(url, {
         method: 'delete',
         credentials: 'include'
      })
      .then(res => {
         if (res.status === 200) {
            getCars();
         }
      });
   }

   useEffect(() => {
      getCars();
   }, []);

   return (
      <div id='viewComponentContainer' className='vh-100 overflow-auto'>
         <Navbar page='view' logout={logout} />
         <main>
            <View cars={cars} search={search} deleteCar={deleteCar} />
         </main>
      </div>
   );
}