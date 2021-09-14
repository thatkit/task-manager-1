import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './components/Header/Header';
import { Add } from './components/Add/Add';
import { Task } from './components/Task/Task';

const App = () => {
  return (
      <div>
          <Header />
          <Add />
          <Task name="Learn React.js" />
      </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
