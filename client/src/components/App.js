import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import NotFound from "./NotFound";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route  component={NotFound} />
      </Switch>
    </main>
  </BrowserRouter>
);

export default App;
