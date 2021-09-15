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
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(e) {
    e.preventDefault();
    console.log(e.target);
    this.setState((state, props) => ({
      tasks: state.tasks.filter(task => task.name !== e.target.name)
    }));
  }

  render() {
    return (
      <div>
          <Header />
          <Add />
          <Task handleClose={this.handleClose} tasks={this.state.tasks} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
