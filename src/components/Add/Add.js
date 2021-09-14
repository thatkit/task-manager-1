import React from 'react';

export const Add = () => {
    return (
        <form className="add-task row justify-content-between">
            <input className="add-task__task-text form-control col-12" type="text" name="" id="" style={{paddingLeft: 0}} />
            <input className="add-task__add-btn btn btn-success col-2" type="button" value="Add" />
        </form>
    );
}
