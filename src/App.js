import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


import RestorePassword from './components/RestorePassword';
import Welcome from './components/Welcome';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/restore" exact>
          <div className="App container">
            <RestorePassword />
          </div>
        </Route>
        <Route path="/home" exact>
          <div className="App container">
            <h1>Home page</h1>
          </div>
        </Route>
        <Route path="/">
          <div className="App container">
            <Welcome />
          </div>
        </Route>
        
      </Switch>
    </Router>

  );
}

export default App;
