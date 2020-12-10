import React from 'react';
import {Navbar} from './navbar'
import { Showcase } from './showcase';


export default class WelcomeComponent extends React.Component {

   render() {
      return (
         <div id="welcomeContainer" className='h-100'>
            <Navbar page='welcome'/>
            <main>
               <Showcase />
            </main>
         </div>
      );
   }
}