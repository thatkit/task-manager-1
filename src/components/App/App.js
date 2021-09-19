import React from 'react';

import { Header } from '../Header/Header';
import { Add } from '../Add/Add';
import { Task } from '../Task/Task';

import { fetchTasks } from '../../helpers'

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      newTask: {
        id: null,
        name: ''
      }
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Fetching tasks from database
  componentDidMount() {
    const setTasks = async () => {
      this.setState({tasks: await fetchTasks()});
    }

    setTasks();
  }

  // Handle input changes
  handleChange(e) {
    const getID = async e => {
      const tasks = await fetchTasks();
      const lastTask = await tasks[tasks.length - 1];

      this.setState(prevState => {
        return {
          newTask: {
            ...prevState.newTask,
            id: lastTask ? lastTask.id + 1 : 1
          }
        }
      });
    }

    getID(e);

    this.setState(prevState => {
      return {
        newTask: {
          ...prevState.newTask,
          name: e.target.value
        }
      }
    });
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
