import React from 'react';
// import { Task } from '../Task/Task';

export const Add = () => {
    const handleClick = e => {
        e.preventDefault();
        console.log('click-click!');
        // return <Task name="Hello world" />
    }

    return (
        <form className="add-task row justify-content-between">
            <input className="add-task__task-text form-control col-12" type="text" name="" id="" />
            <input onClick={handleClick} className="add-task__add-btn btn btn-success col-2" type="button" value="Add" />
        </form>
    );
}
