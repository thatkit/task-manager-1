import React from 'react';

export const Task = (props) => {
    return (
        <div className="row p-4 bg-light border">
                <h2 className="col-11">{props.name}</h2>
                <button className="col-1 btn btn-outline-danger">X</button>
        </div>
    );
}
