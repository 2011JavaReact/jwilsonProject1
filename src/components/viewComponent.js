import { Navbar } from './navbar';
import { View } from './view';

export const ViewComponent = (props) => {

   return (
      <div id='viewComponentContainer' className='vh-100'>
         <Navbar page='view'/>
         <main>
            <View />
         </main>
      </div>
   );
}