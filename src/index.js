import React from 'react';
import ReactDOM from 'react-dom';
import { Footer } from "./components/footer";
import App from './app';
import './css/bootstrap.css';
import './css/styles.css';



ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<Footer />, document.getElementById('footer'));
