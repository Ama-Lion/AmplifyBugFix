import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'

import Amplify from "@aws-amplify/core";
import config from './aws-exports';
// import Amplify, { DataStore, Predicates } from "@aws-amplify/core";
// import Amplify, { DataStore, Predicates, Logger } from 'aws-amplify';

Amplify.configure(config);
// Logger.LOG_LEVEL = 'DEBUG'
// DataStore.start()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

