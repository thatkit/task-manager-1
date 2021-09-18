import React from 'react';

export const Task = (props) => {
    const randomKey = () => Math.floor(Math.random() * 1000 + 10000);

    return (
        <>
            {
                props.tasks.map(el => {
                    return (
                        <div key={el.id ? el.id : randomKey()} className="row p-4 bg-light border">
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
