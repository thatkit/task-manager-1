import React from 'react';

export const Add = (props) => {
    return (
        <form onSubmit={props.onSubmit} className="add-task row justify-content-between">
            <input
                onChange={props.onChange} 
                className="add-task__task-text form-control col-12" 
                type="text" 
                name="" 
                id="" 
                value={props.value} 
                placeholder="New task"    
            />
            <input className="add-task__add-btn btn btn-dark col-2" type="submit" value="Add" />
        </form>
    );
}