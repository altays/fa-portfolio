import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css'

import Music from "../src/components/pages/Music";
import Podcast from "../src/components/pages/Podcast";
import Store from "../src/components/pages/Store";
import Video from "../src/components/pages/Video";
import About from "../src/components/pages/About";
import Programming from "../src/components/pages/Programming";

import Nav from "../src/components/Nav/index";
import Footer from "../src/components/Footer/index";


export default function App() {
  return (
    <Router>
        <Nav />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/music">
            <Music />
          </Route>
          <Route path="/podcast">
            <Podcast />
          </Route>
          <Route path="/store">
            <Store />
          </Route>
          <Route path="/video">
            <Video />
          </Route>
          <Route path="/programming">
            <Programming />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
  
        <Footer />
    </Router>
  );
}