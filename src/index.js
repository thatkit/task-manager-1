import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './components/Header/Header';
import { Add } from './components/Add/Add';

const App = () => {
  return (
      <div>
          <Header />
          <Add />
      </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
