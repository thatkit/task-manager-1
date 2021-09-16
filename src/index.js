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
      newTaskName: ''
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({newTaskName: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(`The event target: ${e.target}`);
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
          <Add 
            onChange={this.handleChange} 
            value={this.state.newTaskName} 
            onSubmit={this.handleSubmit} 
          />
          <Task 
            onClose={this.handleClose} 
            tasks={this.state.tasks} 
          />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
