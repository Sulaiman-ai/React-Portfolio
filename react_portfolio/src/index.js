import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome, faReact, faHtml5, faCss3, faJs, faNode, faPython } from '@fortawesome/free-brands-svg-icons'
// import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
// import { faHatCowboy } from '@fortawesome/pro-thin-svg-icons'
// import { faHatChef } from '@fortawesome/sharp-solid-svg-icons'
// import { faPlateUtensils } from '@fortawesome/sharp-regular-svg-icons'

import { BrowserRouter } from 'react-router-dom';

library.add(fas, faReact, faHtml5, faCss3, faJs, faNode, faPython)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
