import Axios from 'axios';
import React, { useState } from 'react';
import { Add } from './add';
import { Navbar } from './navbar';

export const AddComponent = ({logout}) => {

   const [success, setSuccess] = useState({state: false, message: ''});

   const insertCar = (e, carName, carPrice) => {
      e.preventDefault();
      //const url = `http://18.191.134.205:8080/cars/cars?carName=${carName}&carPrice=${carPrice}`
      const url = `http://localhost:8080/cars/cars?carName=${carName}&carPrice=${carPrice}`;

      Axios.post(url, {}, {withCredentials: true})
      .then(res => {
         const msg = res.data.slice(res.data.indexOf('.') + 1);
         if (msg !== 'null') {
            setSuccess({state: true, message: 'Car Inserted Successfully!'});
            e.target.reset();
         } else {
            setSuccess({state: false, message: 'Error Inserting Car'});
         }
      });
   }

   return (
      <div id='addComponentContainer'>
         <Navbar page='add' logout={logout}/>
         <Add insertCar={insertCar} success={success}/>
      </div>
   );
}