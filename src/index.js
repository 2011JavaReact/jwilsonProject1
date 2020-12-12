import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './css/bootstrap.css';
import './css/styles.css';
import {Footer} from './components/footer'
import AuthContext from './components/context/AuthContext';



ReactDOM.render(<AuthContext> <App /></AuthContext>, document.getElementById('root'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
