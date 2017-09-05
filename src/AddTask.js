import React, { Component } from 'react';

class AddTask extends Component {
    constructor(props){
        super(props);
        this.addTask = this.addTask.bind(this);
    }

    addTask(event){
        event.preventDefault();
        let input = event.target.querySelector('input');
        let nameTask = input.value;
        console.log(nameTask);
        input.value = '';
        this.props.updateTask(nameTask)
    }
  render() {
    return (
            <form onSubmit={this.addTask}>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Name Task"/>
                      <span className="input-group-btn">
                        <button className="btn btn-default"  type="submit">
                          Add
                        </button>
                      </span>
                </div>
            </form>
    );
  }
}

export default AddTask;
