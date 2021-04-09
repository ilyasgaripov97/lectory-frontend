import './Profile.css'

import { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'

import parseJwt from '../../utils/jwt';
import Card from '../Card/Card';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';


const generateWelcomeMessage = () => {
  const token = localStorage.getItem('token');
  return `Welcome, ${parseJwt(token).username}`;
}

const setPreferences = (id_user, preferences) => {
  return fetch(`http://localhost:8000/user/${id_user}/preferences/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(preferences),
  })
    .then(data => data.json())
}

const fetchPreferences = (id_user) => {
  return fetch(`http://localhost:8000/user/${id_user}/preferences/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(data => data.json())
}

const Profile = () => {

  const [isMaterialsHidden, setIsMaterialsHidden] = useState()
  const welcome = generateWelcomeMessage();

  const logout = () => {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
      window.location.reload();
    }
  }

  return (
    <div className="profile-wrapper">
      <Card margin="small">
        <div className="profile-wrapper__controls">
          <div className="profile-wrapper__welcome">
            <Link to="/">{welcome}</Link>
          </div>
          <div className="button-wrapper">
            <Button handleClick={logout} text={"Выйти"} height={"30px"} weight={"10px"} isUpper={true} isAccent={true} hasMargin={true} />
          </div>
        </div>
      </Card>
      <Card margin="small">
        <h3>Настройки</h3>
        <p>Скрывать материалы</p>
        {/* <Button handleClick={hideMaterials} text={"hide"}></Button> */}
      </Card>

    </div>
  )
}


export default Profile;