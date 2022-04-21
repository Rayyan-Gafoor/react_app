import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App';
import "./index.css";



ReactDOM.render(
<HashRouter>
<App/>
</HashRouter>, 
document.getElementById("root")

);
