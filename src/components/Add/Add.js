import React from 'react';

export class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(`The event target: ${e.target.value}`);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="add-task row justify-content-between">
                <input
                    onChange={this.handleChange} 
                    className="add-task__task-text form-control col-12" 
                    type="text" 
                    name="" 
                    id="" 
                    value={this.state.value} 
                    placeholder="New task"    
                />
                <input className="add-task__add-btn btn btn-success col-2" type="submit" value="Add" />
            </form>
        );
    }
}