import React from 'react';

export const Task = (props) => {
    return (
        <>
            {
                props.tasks.map(el => {
                    return (
                        <div key={el.id} className="row p-4 bg-light border">
                            <h2 className="col-11">{el.name}</h2>
                            <button 
                                onClick={props.onClose} 
                                id={el.id} 
                                name={el.name} 
                                className="col-1 btn btn-outline-danger"
                            >
                                X
                            </button>
                        </div>
                    );
                })
            }       
        </>
    );
}
