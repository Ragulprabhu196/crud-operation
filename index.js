import React from 'react';
import ReactDOM from 'react-dom/client';
import { v4 as uuid } from 'uuid';

import App from './component/App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


