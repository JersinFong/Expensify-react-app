//import from npm modules.
import React from 'react';
import ReactDOM from 'react-dom';
//import from components functions or class
//import style
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouters from './routers/AppRouters'



ReactDOM.render(<AppRouters />, document.querySelector('#app'));

