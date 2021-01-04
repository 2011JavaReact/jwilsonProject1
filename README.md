# Car Tracker
## Project Description
This application serves as a basic front end for the Car Tracker API. This API allows for the management of car inventory and cusomers. Presently this application focuses on managing car inventory with customer functionality in the works. 

## Technologies Used
- JavaScript
- React
- Bootstrap
- Axios
- Create-React_app
- Node.js
- npm


## Features
- Login and logout 
- Car inventory management
   - add cars
   - remove cars
   - view cars

## Getting Started 

## Application set up
- If you would like to setup this application you will need to first have a configured API backend. Instructions for setting that up can be found [here](https://github.com/2011JavaReact/car-tracker). 

- After configuring your backend, be sure you have node.js and npm installed, and clone the repository:
   > git clone https://github.com/2011JavaReact/jwilsonProject1.git

- Once the repository is cloned, navigate to the directory and run the following command to get all necessary dependencies:
   > npm i

- Finally run the following command to run the development server. 
   >npm start


To deploy this application run the command
> npm run build

This will create a build directory with the static files necessary to run the application. Once you have this directory all you need to do is move the files to the web server of your choice, such as apache, ngix, or Amazon S3. 

## Usage
Once you navigate to the application, you will need to login by clicking the login button in the top right corner. Once authenticated you will be redirected to a view page that will show you all cars in the inventory. This page will allow you to search car inventory as well as delete cars from your inventory. 

In the nav bar you will also see a link to an add page. This page will bring you to a form that will allow you to add new cars to your inventory. After adding a car you can navigate back to the view page to see your new inventory item. 

## Contributors
Backend API provided by fjohnsoniii

## License
This project does not have an applied license.
