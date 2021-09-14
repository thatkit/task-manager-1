import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './components/Header/Header';
import { Add } from './components/Add/Add';
import { Task } from './components/Task/Task';

import { tasksList } from './TasksList'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: tasksList
    };
  }

  render() {
    return (
      <div>
          <Header />
          <Add />
          <Task key="_0" name="Build task manager" />
          {this.state.tasks.map((el, ind) => {
            return (
              <div key={`_${ind + 1}`} className="row p-4 bg-light border">
                <h2 className="col-11">{el.name}</h2>
                <button className="col-1 btn btn-outline-danger">X</button>
              </div>
            );
          })}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
