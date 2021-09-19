/**
 * (1) Fetch functions
 */

const baseURL = 'http://localhost:5000/';

// (1.1) GET request

export const fetchTasks = async () => {
    const response = await fetch(`${baseURL}tasks`);
    const tasks = await response.json();
    return tasks;
}