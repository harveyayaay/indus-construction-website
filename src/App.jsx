import Header from "./pages/Header";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about-us" exact component={AboutUs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
