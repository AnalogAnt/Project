import {BrowserRouter, Switch, Route} from "react-router-dom";
import { Component } from "react";
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