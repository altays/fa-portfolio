import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Sound from "./components/pages/Sound";
import Store from "../src/components/pages/Store";
import Video from "../src/components/pages/Video";
import About from "../src/components/pages/About";
import Programming from "../src/components/pages/Programming";

import Nav from "../src/components/Nav/index";
import Footer from "../src/components/Footer/index";
import Wallpaper from "../src/components/Wallpaper";
import Wrapper from "../src/components/Wrapper"

export default function App() {
  return (
    <Router>

        <Wallpaper />

        {/* container start */}
        <Wrapper>

        <Nav />

        <Switch>
          <Route path="/sound">
            <Sound />
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

        </Wrapper>

          {/* container end */}
    </Router>
  );
}