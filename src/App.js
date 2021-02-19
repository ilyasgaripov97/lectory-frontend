import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Card from './components/Card';
import Header from './components/Header'
import InputField from './components/InputField';
import Logo from './components/Logo';
import Button from './components/Button';


function App() {
  return (
    <Router>
      {/* <nav>
        <ul>
          <Link to="/">Home</Link>
        </ul>
        <ul>
          <Link to="/other">Other</Link>
        </ul>
      </nav> */}
      <Switch>
        <Route path="/restore" exact>
          <div className="App container">
            <Card>
              <Logo />
              <Header titleText={"Восстрановить пароль"} />
              <InputField label={"Электронная почта"} type={"email"} placeholder="yammy@gmail.com" />
              <Button text={"Восстановить"} isUpper={true} isPrimary={true} hasMargin={true} />
            </Card>
          </div>
        </Route>
        <Route path="/">
          <div className="App container">
            <Card>
              <Logo />
              <Header titleText={"Добро пожаловать"} />
              <InputField label={"Электронная почта"} type={"email"} placeholder="yammy@gmail.com" />
              <InputField label={"Пароль"} type={"password"} placeholder="yoursecret" />
              <Button text={"Войти"} isUpper={true} isPrimary={true} hasMargin={true} />
              <Button text={"Создать аккаунт"} isUpper={true} isAccent={true} hasMargin={true} />
            </Card>
          </div>
        </Route>
        
      </Switch>
    </Router>

  );
}

export default App;
