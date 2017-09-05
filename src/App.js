import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTask  from './AddTask';
import ListTask  from './ListTask';


let items = ['Task1', 'Task2','Task3'];
class App extends Component {

    
    constructor(props){
        super(props);
        this.state = {
            tasks: items,
            editIndex:null
        };
        console.log("State",this.state);
        this.updateTask = this.updateTask.bind(this);
        
    }

    updateTask(nameTask){
        var listTasks = this.state.tasks;
        console.log("listTasks",listTasks);
        listTasks.push(nameTask);
        this.setState({
            tasks:listTasks
        })
    }

    removeTask(index){
        var tasks = Array.from(this.state.tasks);
        tasks.splice(index,1);
        this.setState({ tasks:tasks });
    }

    editTask(index){
        console.log("parent index",index);
        this.setState({
            editIndex:index
        });
        console.log("stateIndex",index);
        console.log("stateIndexState",this.state.editIndex);
    }

    

  render() {
    return (
        <div className="container">
            <div className="col-sm-6 col-sm-offset-3">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">To do app</h3>
                    </div>
                    <div className="panel-body">
                        <AddTask updateTask={this.updateTask} />
                        <ListTask  editIndex ={this.state.editIndex} items = {this.state.tasks} edit={this.editTask.bind(this)} remove = {this.removeTask.bind(this)} />
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
