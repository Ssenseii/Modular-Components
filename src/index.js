import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.scss';

import Module from './components/module'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <div className='container'>
      <div className='container__lvl-1'>
        <Module />
      </div>
        <div className='container__lvl-2'>
          <Module />
          <Module />
          <Module />
        </div>
      </div>
  </React.StrictMode>
);


