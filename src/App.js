import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './components/About'
import Check from './components/Check'

function App() {
  return (
    <Router> 
      <Switch>
          <Route exact path="/">
            <Check />
          </Route>
          <Route path="/yaswanth">
            <About />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
