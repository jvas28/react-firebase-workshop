import React, { Component } from 'react';

class AddBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            description: "",
        }
        this.onTextChange = this.onTextChange.bind(this);
    }
    onTextChange(event){
        this.setState({description: event.target.value});
    }
    render() {
        const { addTask } = this.props;
        const { description } = this.state;
        return (
            <nav className="navbar navbar-light bg-light">
            <div className="form-inline">
              <input  onChange={this.onTextChange} className="form-control" type="search" placeholder="Nueva Tarea..." value={description} />
              <button onClick={()=>{
                  this.setState({description:""})
                  addTask(description);
                  }} className="btn btn-outline-success" type="submit">Agregar</button>
            </div>
          </nav>
        );
    }
}

export default AddBar;