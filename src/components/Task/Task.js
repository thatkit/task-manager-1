import React from 'react';

export const Task = (props) => {
    return (
        <div className="row">
            <div className="col-12 p-4 bg-light border">
                <h2>{props.name}</h2>
            </div>
        </div>
    );
}
