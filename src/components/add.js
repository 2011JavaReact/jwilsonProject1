import React, { useState } from 'react';

export const Add = ({insertCar, success}) => {
   const [state, setState] = useState({});

   const handleChange = (e) => {
      setState({...state, [e.target.name]: e.target.value})
   }

   return (
      <div id='addContainer'>
         <div className='m-2'>
            <div id='addFormContainer' className='m-auto w-50 rounded bg-dark p-4'>
               <form onSubmit={(e) => insertCar(e, state.carName, state.carPrice)}>
                  <h2 id='addCarFormTitle' className='text-center'>Add A Car</h2>
                  {success.state ? <h3 className='text-center'>{success.message}</h3>: <h3 className='text-center error'>{success.message}</h3> }
                  <hr/>
                  <div className='form-group'>
                     <label htmlFor='carName'>Car Name</label>
                     <input type='text' name='carName' id='carName' className='form-control' placeholder='Car Name' value={state.carName} onChange={handleChange} required />
                  </div>
                  <div className='form-group'>
                     <label htmlFor='carName'>Car Name</label>
                     <input type='number' name='carPrice' className='form-control' placeholder='Car Price' value={state.carPrice} onChange={handleChange} required />
                  </div>
                  <div className='text-center'>
                     <button type='submit' id='addFormBtn' className='btn btn-primary'>Submit</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}