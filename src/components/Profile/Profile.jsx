import './Profile.css'

import { useState, useEffect } from 'react'


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

  useEffect(async () => {
    if (localStorage.getItem('token')) {
      const jwtToken = parseJwt(localStorage.getItem('token'));
      const id_user = jwtToken.id_user;
      const json = await fetchPreferences(id_user);
      console.log('Hide materials (start):', json.data.hide_materials);

      setIsMaterialsHidden(json.data.hide_materials)
    }
  }, [])

  const hideMaterials = async () => {

    if (localStorage.getItem('token')) {
      const jwtToken = parseJwt(localStorage.getItem('token'));
      const id_user = jwtToken.id_user;

      // Получаем текущие настройки установленные у пользователя
      const json = await fetchPreferences(id_user)

      // Изменяем их при клике на чекбокс
      setPreferences(id_user, {hide_materials: !json.data.hide_materials});
      setIsMaterialsHidden(!json.data.hide_materials)
      console.log('Hide materials (on click):', !json.data.hide_materials);
    }
  }

  return (
    <div className="profile-wrapper">
      <Card margin="small">
        <div className="profile-wrapper__controls">
          <div className="profile-wrapper__welcome">{welcome}</div>
          <div className="button-wrapper">
            <Button handleClick={logout} text={"Выйти"} height={"30px"} weight={"10px"} isUpper={true} isAccent={true} hasMargin={true} />
          </div>
        </div>
      </Card>
      <Card margin="small">
        <h3>Настройки</h3>
        <p>Скрывать материалы</p>
        <Checkbox handleClick={hideMaterials} checked={isMaterialsHidden}/>
        {/* <Button handleClick={hideMaterials} text={"hide"}></Button> */}
      </Card>

    </div>
  )
}


export default Profile;