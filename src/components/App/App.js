import React from 'react';

// Components
import { Header } from '../Header/Header';
import { Add } from '../Add/Add';
import { Task } from '../Task/Task';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      newTask: {
          name: ''
      }
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const fetchTasks = async () => {
      const response = await fetch('http://localhost:5000/tasks');
      const tasks = await response.json();
      this.setState({tasks: await tasks});
    }
    
    fetchTasks()
  }

  handleChange(e) {
    this.setState({newTask: {
      name: e.target.value
    }});
  }

  // Add task
  handleSubmit(e) {
    e.preventDefault();

    const addTask = async e => {
      const response = await fetch(`http://localhost:5000/tasks/`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(this.state.newTask)
      });

      return response;
    }

    addTask(e);

    this.setState(prevState => {
        return {
            tasks: prevState.tasks.concat(prevState.newTask),
            newTask: {
              name: ''
            }
        };
    });
  }

  // Delete task
  handleClose(e) {
    e.preventDefault();

    const deleteTask = async e => {
      await fetch(`http://localhost:5000/tasks/${e.target.id}`, {
        method: 'DELETE'
      });
    }

    deleteTask(e);

    this.setState(state => ({
      tasks: state.tasks.filter(task => task.id !== +e.target.id)
    }));
  }

  render() {
    return (
      <div>
          <Header />
          <Add 
            onChange={this.handleChange} 
            value={this.state.newTask.name} 
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
