'use strict';

import React from 'react';
import App from '../app/App.jsx';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

// export const App = () =>
//       <div>
//         {/* <h1>Build Successful!</h1>
//         <p>This file is located under /Client/scripts/</p> */}
//         <home />
//       </div>

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>),
  document.getElementById( 'react-mount-point' )
);

// export default App;
