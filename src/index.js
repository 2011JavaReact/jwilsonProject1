import React from 'react';
import ReactDOM from 'react-dom';
import './css/bootstrap.css';
import './css/styles.css';
import { Footer } from "./footer";
import App from './app';



ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<Footer />, document.getElementById('footer'));
