import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


import RestorePassword from './components/RestorePassword';
import ChangePassword from './components/ChangePassword';
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
        <Route path="/change-password" exact>
          <div className="App container">
            <ChangePassword />
          </div>
        </Route>
        <Route path="/home" exact>
          

          <div className="App container">
            {localStorage.getItem('token') ?
            <h1>Home page</h1>
            :
            <h1>Unauthorized access to the home page</h1>
            }
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
