import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "../src/components/pages/Home";
import About from "../src/components/pages/About";
import Users from "../src/components/pages/Users";
import Stocks from "../src/components/pages/Stocks";
import Nav from "../src/components/Nav/index"

export default function App() {
  return (
    <Router>
      <div>
        <Nav />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/stocks">
            <Stocks />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}