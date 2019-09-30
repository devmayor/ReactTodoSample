import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage.component";
import AddTodo from "./pages/AddTodo/AddTodo.component";
import Header from "./components/Header/Header.component";

class Main extends React.Component {
  state = {
    todos: []
  };
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/addtodo" component={AddTodo} />
        </Switch>
      </div>
    );
  }
}

export default Main;
