import {BrowserRouter, Switch, Route} from "react-router-dom";
import { Component } from "react";
import {createStore} from "redux";
import {Provider, connect, useSelector, useDispatch} from "react-redux";
import Home from "./components/Home";
import About from "./components/About";

class App extends Component
{
  render()
  {
    return(
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path = "/about" component={About} />
      </Switch>
      </BrowserRouter>
    )
  }
}

export default App;