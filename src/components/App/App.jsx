import './App.css';

import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';


import RestorePassword from '../RestorePassword/RestorePassword';
import ChangePassword from '../ChangePassword/ChangePassword.jsx';
import Welcome from '../Welcome/Welcome';
import Home from '../Home/Home';
import Profile from '../Profile/Profile'
import MaterialEditor from '../Home/Feed/Material/MaterialEditor/MaterialEditor'
import Materials from '../Materials/Materials';

import useToken from './useToken';


function App() {

  const { token, setToken } = useToken();
  const [materials, setMaterials] = useState([]);

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
            <Profile />
          </div>
          : renderWelcomeCard()
          }
        </Route>
        
        <Route path="/" exact>
          {token ?
            <Home materials={materials} setMaterials={setMaterials}/>
          : renderWelcomeCard()
          }
        </Route>
        <Route path="/materials" exact>
          <Materials materials={materials} setMaterials={setMaterials}/>
        </Route>
        <Route path="/materials/:id_material" exact>
          <MaterialEditor />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
