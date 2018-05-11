import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Changing up the color and font scheme for the app
// const bobaTheme = getMuiTheme({});

ReactDOM.render((
  <MuiThemeProvider bobaTheme={bobaTheme}>
    <HashRouter>
      <App />
    </HashRouter>
  </MuiThemeProvider>)
  ,document.getElementById('root'));