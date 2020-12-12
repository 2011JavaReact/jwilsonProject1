import React, { useEffect, useState } from 'react';
import { Navbar } from './navbar';
import { View } from './view';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

export const ViewComponent = ({logout, auth}) => {

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

   const search = (e, val) => {
      e.preventDefault();
      let url;
      if (val === '') {
         getCars();
      } else if (parseInt(val)){
         // const url = `http://18.191.134.205:8080/cars/cars?carId=${name}`;
         url = `http://localhost:8080/cars/cars?carId=${val}`;
         console.log(url);
         Axios.get(url, {}, { withCredentials: true, headers: { 'Access-Control-Allow-Origin': 'http://localhost:3000' } })
            .then(res => {
               setCars(res.data);
            });
      } else {
         url = `http://localhost:8080/cars/cars?carName=${val}`;
         console.log(url);
         Axios.get(url, {}, { withCredentials: true, headers: { 'Access-Control-Allow-Origin': 'http://localhost:3000' } })
            .then(res => {
               setCars(res.data);
            });
      }
   }

   const deleteCar = (id) => {
      // const url = `http://18.191.134.205:8080/cars/cars?carId=${id}`
      const url = `http://localhost:8080/cars/cars?carId=${id}`;

      Axios.delete(url, {}, {withCredentials: true})
      .then(res => {
         if (res.status === 200) {
            getCars();
         }
      });
   }

   useEffect(() => {
      console.log(auth);
      if(!auth) {
         <Redirect to='/login'/>
      }
      getCars();
   }, []);

   return (
      <div id='viewComponentContainer' className='vh-100 overflow-auto'>
         <Navbar page='view' logout={logout}/>
         <main>
            <View cars={cars} search={search} deleteCar={deleteCar}/>
         </main>
      </div>
   );
}