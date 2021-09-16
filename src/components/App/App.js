import React from 'react';

// Components
import { Header } from '../Header/Header';
import { Add } from '../Add/Add';
import { Task } from '../Task/Task';

// Fake backend data base
import { tasksList } from '../../TasksList'

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: tasksList,
      newTask: {}
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({newTask: {
        name: e.target.value
    }});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(prevState => {
        return {tasks: prevState.tasks.concat(prevState.newTask)};
    });
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
