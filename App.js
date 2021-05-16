import './App.css';
import EHome from './eHome';
import Login from './Login';
import Signup from './Signup';
import {BrowserRouter as Router, Route, Switch  } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Route path="/SignUp"  component={Signup} />
        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/" component={EHome}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
