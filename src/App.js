import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Professionals from "./pages/Professionals";
import GetPaired from "./pages/GetPaired";
import VolunteersAvailable from "./pages/Volunteers";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/professionals" component={Professionals} />
        <Route path="/volunteers" component={VolunteersAvailable} />
        <Route path="/volunteer-assignment" component={GetPaired} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
