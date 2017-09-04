import React, { Component } from 'react';

class ListTask extends Component {
    constructor(props){
        super(props);
        console.log(this.props.items);
        localStorage.setItem('listTasks', this.props.items);
        this.remove = this.remove.bind(this);
    }

    remove(index){
        console.log("Index",index);
        this.props.removeTask(index);
    }

  render() {
    return (
            <ul>
                {this.props.items.map((elem, index) =>{
                    return <li key={index}>
                        <span>
                            {elem}
                            <button className="btn btn-danger btn-sm" onClick={this.props.remove}>X</button>
                        </span>
                    </li>
                })}
            </ul>
    );
  }
}

export default ListTask;
