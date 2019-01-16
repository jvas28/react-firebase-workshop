import React, { Component } from 'react';
import './App.css';
import Todo from '../Todo/Todo';
import AddBar from '../AddBar/AddBar';
import { tasklist } from '../../services/constants';
import uuid from 'uuid';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: tasklist, // debe ser [] cuando se integre firestore
    }
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.onTaskStatusChange = this.onTaskStatusChange.bind(this);
  }
  addTask(description){
    const { todos } = this.state;
    // aqui debe agregarse a Firestore
    const item = {
      code: uuid(),
      description,
      status: "TODO",
    }
    this.setState({todos: [...todos,...[item]]});
  }
  removeTask(code){
    // aqui debe removerse de Firestore
    const { todos } = this.state;
    this.setState({todos: todos.filter((todo)=>todo.code !== code)});
  }
  onTaskStatusChange(code,status){
    const { todos } = this.state;
    this.setState({todos: todos.map((todo)=>{
        if(todo.code === code)
        todo.status = status;
        return todo;
    })});
  }
  componentDidMount(){
    // hacer la carga inicial y setear el todos
  }
  render() {
    const { todos } = this.state;
    return (
      <div className="container ">
      <AddBar addTask={this.addTask} />
      <div className="row">
          <div className="col-md-4 col-sm-12">
              <div className="card card-container">
                  <div className="card-body">
                      <h4 className="card-title">To do</h4>
                      {
                          todos
                          .filter((todo)=>todo.status==="TODO")
                          .map((todo)=>{
                            return <Todo key={todo.code} onTaskStatusChange={this.onTaskStatusChange} removeTask = {this.removeTask} {...todo} />
                          })
                      }
                  </div>
              </div>
          </div>
          <div className="col-md-4 col-sm-12">
              <div className="card card-container">
                  <div className="card-body">
                      <h4 className="card-title">Doing</h4>
                      {
                          todos
                          .filter((todo)=>todo.status==="DOING")
                          .map((todo)=>{
                            return <Todo key={todo.code} onTaskStatusChange={this.onTaskStatusChange} removeTask = {this.removeTask} {...todo} />
                          })
                      }
                  </div>
              </div>
          </div>
          <div className="col-md-4 col-sm-12">
              <div className="card card-container">
                  <div className="card-body">
                      <h4 className="card-title">Done</h4>
                      {
                          todos
                          .filter((todo)=>todo.status==="DONE")
                          .map((todo)=>{
                            return <Todo key={todo.code} onTaskStatusChange={this.onTaskStatusChange} removeTask = {this.removeTask} {...todo} />
                          })
                      }
                   </div>
              </div>
              
          </div>
      </div>
  </div>
    );
  }
}

export default App;
