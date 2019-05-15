import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateTodo from "./create-todo.component";
import EditTodo from "./edit-todo.component";
import TodosList from "./todos-list.component";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">

          <h2>MERN-Stack Todo App</h2>
          <br />
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
