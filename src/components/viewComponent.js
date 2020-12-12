import React, { useEffect, useState } from 'react';
import { Navbar } from './navbar';
import { View } from './view';
import Axios from 'axios';

export const ViewComponent = (props) => {

   const [cars, setCars] = useState([]);

   const getCars = () => {
      // const url = 'http://18.191.134.205:8080/cars/cars';
      const url = 'http://localhost:8080/cars/cars';

      Axios.get(url, {}, { withCredentials: true, headers: { 'Access-Control-Allow-Origin': 'http://localhost:3000' } })
         .then(res => {
            const index = res.data.indexOf(']');
            const data = res.data.substring(index + 1, 0);
            setCars(JSON.parse(data));
         });
   }

   const getCarsByName = (name) => {
      let url;
      if (name === '') {
         getCars();
      } else {
         // const url = `http://18.191.134.205:8080/cars/cars?carName=${name}`;
         url = `http://localhost:8080/cars/cars?carName=${name}`;
         console.log(url);
         Axios.get(url, {}, { withCredentials: true, headers: { 'Access-Control-Allow-Origin': 'http://localhost:3000' } })
            .then(res => {
               setCars(res.data);
            });
      }
   }

   useEffect(() => {
      getCars();
   }, []);

   return (
      <div id='viewComponentContainer' className='vh-100'>
         <Navbar page='view' />
         <main>
            <View cars={cars} search={getCarsByName} />
         </main>
      </div>
   );
}