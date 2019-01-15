import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container ">
      <div className="row">
          <div className="col-md-4 col-sm-12">
              <div className="card card-container">
                  <div className="card-body">
                      <h4 className="card-title">To do</h4>
                      <div className="card my-1 bg-primary text-white">
                          <div className="card-body">
                              <p className="card-text">
                                  Transformar el tablero en aplicación
                              </p>
                              <select className="custom-select">
                                  <option value="TODO">To do</option>
                                  <option value="DOING">Doing</option>
                                  <option value="DONE">Done</option>
                              </select>
                          </div>
                      </div>
                      <div className="card my-1 bg-primary text-white">
                          <div className="card-body">
                              <p className="card-text">
                                  Conectarnos a Firebase
                              </p>
                              <select className="custom-select">
                                  <option value="TODO">To do</option>
                                  <option value="DOING">Doing</option>
                                  <option value="DONE">Done</option>
                              </select>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="col-md-4 col-sm-12">
              <div className="card card-container">
                  <div className="card-body">
                      <h4 className="card-title">Doing</h4>
                      <div className="card my-1 bg-warning text-white">
                          <div className="card-body">
                              <p className="card-text">
                                  Explicación del Ejercicio
                              </p>
                              <select className="custom-select">
                                  <option value="TODO">To do</option>
                                  <option value="DOING" selected>Doing</option>
                                  <option value="DONE">Done</option>
                              </select>
                          </div>
                      </div>
                      <div className="card my-1 bg-warning text-white">
                          <div className="card-body">
                              <p className="card-text">
                                  Sintaxis - ES6
                              </p>
                              <select className="custom-select">
                                  <option value="TODO">To do</option>
                                  <option value="DOING" selected>Doing</option>
                                  <option value="DONE">Done</option>
                              </select>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="col-md-4 col-sm-12">
              <div className="card card-container">
                  <div className="card-body">
                      <h4 className="card-title">Done</h4>
                      <div className="card my-1 bg-success text-white">
                          <div className="card-body">
                              <p className="card-text">
                                  Presentación 
                              </p>
                              <select className="custom-select">
                                  <option value="TODO">To do</option>
                                  <option value="DOING">Doing</option>
                                  <option value="DONE" selected>Done</option>
                              </select>
                          </div>
                      </div>
                      <div className="card my-1 bg-success text-white">
                          <div className="card-body">
                              <p className="card-text">
                                  Introducción a React 
                              </p>
                              <select className="custom-select">
                                  <option value="TODO">To do</option>
                                  <option value="DOING">Doing</option>
                                  <option value="DONE" selected>Done</option>
                              </select>
                          </div>
                      </div>
                      <div className="card my-1 bg-success text-white">
                          <div className="card-body">
                              <p className="card-text">
                                  Introducción a Git 
                              </p>
                              <select className="custom-select">
                                  <option value="TODO">To do</option>
                                  <option value="DOING">Doing</option>
                                  <option value="DONE" selected>Done</option>
                              </select>
                          </div>
                      </div>
                  </div>
              </div>
              
          </div>
      </div>
  </div>
    );
  }
}

export default App;
