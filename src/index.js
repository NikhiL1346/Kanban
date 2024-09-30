import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//to render the react components in the html page's root element
const root = ReactDOM.createRoot(document.getElementById('root'));
//strictmode is special feature of react which has extra checks to ensure there are 
//no errors in our code. has no impact on
root.render(
  <React.StrictMode>  
    <App />
  </React.StrictMode>
);


