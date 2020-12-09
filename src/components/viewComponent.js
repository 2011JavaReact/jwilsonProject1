import React, {useEffect} from 'react';
import { Navbar } from './navbar';
import { View } from './view';

export const ViewComponent = (props) => {

   return (
      <div id='viewComponentContainer'>
         <Navbar page='view'/>
         <main>
            <View />
         </main>
      </div>
   );
}