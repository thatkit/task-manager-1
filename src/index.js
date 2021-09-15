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
      tasks: tasksList,
      newTaskName: null
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    console.log(e.target);
  }

  handleAdd(e) {
    e.preventDefault();
    console.log('clicky-clicky');
    // this.setState((state, props) => ({
    //   tasks: state.tasks.concat({name: })
    // }));
  }

  handleClose(e) {
    e.preventDefault();
    this.setState((state, props) => ({
      tasks: state.tasks.filter(task => task.name !== e.target.name)
    }));
  }

  render() {
    return (
      <div>
          <Header />
          <Add handleChange={this.handleChange} handleAdd={this.handleAdd} />
          <Task handleClose={this.handleClose} tasks={this.state.tasks} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
