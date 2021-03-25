import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


import RestorePassword from '../RestorePassword/RestorePassword';
import ChangePassword from '../ChangePassword/ChangePassword.jsx';
import Welcome from '../Welcome/Welcome';
import Home from '../Home/Home';
import Profile from '../Profile/Profile'

import useToken from './useToken';


function App() {

  const { token, setToken } = useToken();

  const renderWelcomeCard = () => {
    return (
      <div className="App container">
        <Welcome setToken={setToken}/>
      </div>
    )
  }

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

        <Route path="/profile" exact>
          {token ?
          <div className="App container">
            <Profile/>
          </div>
          : renderWelcomeCard()
          }
        </Route>
        
        <Route path="/" exact>
          {token ?
            <Home/>
          : renderWelcomeCard()
          }
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
