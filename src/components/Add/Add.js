import React from 'react';

export const Add = () => {
    return (
        <form className="add-task container">
            <div className="row justify-content-between">
                <input className="add-task__task-text form-control col-2" type="text" name="" id="" />
                <input className="add-task__add-btn btn btn-success col-2" type="button" value="Add" />
            </div>
        </form>
    );
}
