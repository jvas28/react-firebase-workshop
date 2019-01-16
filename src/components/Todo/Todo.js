import React, { Component } from 'react';
const colors = {    
    TODO: 'primary',
    DOING: 'warning',
    DONE: 'success',
}
class Todo extends Component {
    constructor(props){
        super(props);
        this.onStatusChange = this.onStatusChange.bind(this);
    }
    onStatusChange(event){
        const { onTaskStatusChange, code } = this.props;
        onTaskStatusChange(code, event.target.value);
    }
    render() {
        const { code, description, removeTask, status } = this.props;
        const bg_color = colors[status] || 'info';
        return (
            <div className={`card my-1 bg-${bg_color} text-white`}>
                          <div className="card-body">
                              <p className="card-text">
                                  {description} 
                              </p>
                              <select onChange={this.onStatusChange} defaultValue={status} className="custom-select">
                                  <option value="TODO">To do</option>
                                  <option value="DOING">Doing</option>
                                  <option value="DONE">Done</option>
                              </select>
                              <button href="#" style={{float:"right"}}  className="btn btn-danger" onClick={()=>{removeTask(code)}}>x</button>
                          </div>
            </div>
        );
    }
}

export default Todo;