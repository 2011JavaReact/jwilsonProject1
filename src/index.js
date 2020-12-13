import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './css/bootstrap.css';
import './css/styles.css';
import {Footer} from './components/footer'
import Axios from 'axios';

export const http = Axios.create({withCredentials: true});


ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
