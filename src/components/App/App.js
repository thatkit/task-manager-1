import React from 'react';

import { Header } from '../Header/Header';
import { Add } from '../Add/Add';
import { Task } from '../Task/Task';

import { fetchTasks } from '../../helpers'
import { postTask } from '../../helpers'
import { deleteTask } from '../../helpers'

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

    postTask(this.state.newTask);

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

    deleteTask(e.target.id);

    this.setState(state => ({
      tasks: state.tasks.filter(task => task.id !== +e.target.id)
    }));
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-8 col-lg-6 col-xl-4">
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
      </div>
    );
  }
}
