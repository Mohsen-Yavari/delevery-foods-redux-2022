import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import "./font/B-NAZANIN.TTF";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'remixicon/fonts/remixicon.css';

import { BrowserRouter as Router }  from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <App />
     </Router>
  
);


