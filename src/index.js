import React from 'react';
import ReactDOM from 'react-dom';
import AppVelo from './components_inf_velo/AppVelo';

//이렇게 const 지정 할 필요 없으나, 가독성을 위해서 
//const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <AppVelo />
  </React.StrictMode>,
  document.getElementById('root')
);

