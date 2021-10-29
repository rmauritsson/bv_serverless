import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Assignment from "./pages/Assignment";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/volunteer-assignment" component={Assignment} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
