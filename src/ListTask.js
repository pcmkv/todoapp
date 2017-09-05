import React, { Component } from 'react';

class ListTask extends Component {
    
    getInitialState() {
        return {editsTask: false}
    }
    
    constructor(props){
        super(props);
        console.log("List Tasks",this.props.items);
        console.log("listTasks props",this.props);
        //localStorage.setItem('listTasks', this.props.items);
       // this.edit = this.edit.bind(this);
    }

    remove(index){
        console.log("Index",index);
       // this.props.removeTask(index);
    }
    edit() {
       console.log("edit");
    }


  render() {
    return (
        <div><p>test {this.props.editIndex}</p>
            <ul style={{marginTop:'20px'}}>
                {this.props.items.map((task, index) =>{
                    return <li key={index}>
                        { index === this.props.editIndex ? (<input value={task}/>) :
                            <span>
                            {task}
                                <button className="btn btn-danger btn-sm" onClick={this.props.remove.bind(null,index)}>
                                <span className="glyphicon glyphicon-minus-sign"></span>
                            </button>
                            <button className="btn btn-default btn-sm" onClick={this.props.edit.bind(null,index)}><span
                                className="glyphicon glyphicon-pencil"></span></button>
                        </span>
                        }
                    </li>
                })}
            </ul>
        </div>
    );
  }
}

export default ListTask;
