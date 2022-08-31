import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.scss';

import Module from './components/module'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <div className='container'>
        <Module />
      </div>
  </React.StrictMode>
);


