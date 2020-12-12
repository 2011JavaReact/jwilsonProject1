import React from 'react';


const Car = ({c, id, deleteCar}) => {
   return (
      <tr>
         <td>{c.name}</td>
         <td>${c.price.toFixed(2)}</td>
         <td><button type='button' className='btn btn-danger' onClick={(e) => deleteCar(id)}>&#10007;</button></td>
      </tr>
   )
}

export default Car;