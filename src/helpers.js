/**
 * (1) Fetch functions
 */

const baseURL = 'http://localhost:5000/tasks/';

// (1.1) GET request

export const fetchTasks = async () => {
    const response = await fetch(baseURL);
    const tasks = await response.json();
    return tasks;
}

// (1.2) POST request

export const postTask = async newTask => {
    const response = await fetch(baseURL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newTask)
    });

    return response;
}

// (1.3) DELETE request

