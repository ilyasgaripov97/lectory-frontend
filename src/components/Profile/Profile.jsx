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

  // const [isMaterialsHidden, setIsMaterialsHidden] = useState(false) 
  const welcome = generateWelcomeMessage();

  const logout = () => {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token')
      window.location.reload()
    }
  }

  // useEffect(() => {
  //   if (localStorage.getItem('token')) {
  //     const jwtToken = parseJwt(localStorage.getItem('token'));
  //     const id_user = jwtToken.id_user;


  //   }
  // })

  const hideMaterials = async () => {

    if (localStorage.getItem('token')) {
      const jwtToken = parseJwt(localStorage.getItem('token'));
      const id_user = jwtToken.id_user;

      // Получаем текущие настройки установленные у пользователя
      const json = await fetchPreferences(id_user)
      console.log(json.data.hide_materials);

      // // Изменяем их при клике на чекбокс
      setPreferences(id_user, {hide_materials: !json.data.hide_materials});
    }
    // console.log('materials hidden status:', isMaterialsHidden);
    // setIsMaterialsHidden(isMaterialsHidden);
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
        <p>Отображать материалы</p>
        <Checkbox handleClick={hideMaterials}/>
        {/* <Button handleClick={hideMaterials} text={"hide"}></Button> */}
      </Card>

    </div>
  )
}


export default Profile;