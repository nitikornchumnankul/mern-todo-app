import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateTodo from "./create-todo.component";
import EditTodo from "./edit-todo.component";
import TodosList from "./todos-list.component";
import github from "./github-512.png";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light be-light">
            <a className="navbar-brand" href="https://codingthesmartway.com" target="">
              <img src={github} width="30" height="30" alt="CodingTheSmartWay.com"></img>
            </a>
            <Link to="/" className="navbar-brand" >MERN-Stack Todo App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
            <Route path="/" exact component={TodosList} />
            <Route path="/edit/:id" component={EditTodo} />
            <Route path="/create" component={CreateTodo} />
        </div>
      </Router >
    );
  }
}

export default App;
