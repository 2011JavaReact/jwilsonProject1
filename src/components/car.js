import React from 'react';


const Car = ({c}) => {
   return (
      <tr>
         <td>{c.name}</td>
         <td>${c.price.toFixed(2)}</td>
      </tr>
   )
}

export default Car;