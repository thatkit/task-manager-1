import React from 'react';

export const Add = (props) => {
    return (
        <form className="add-task row justify-content-between">
            <input onChange={props.handleChange} className="add-task__task-text form-control col-12" type="text" name="" id="" value=" " placeholder="New task" />
            <input onClick={props.handleAdd} className="add-task__add-btn btn btn-success col-2" type="button" value="Add" />
        </form>
    );
}