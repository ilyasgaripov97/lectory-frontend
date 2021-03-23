import Card from '../Card/Card';
import Logo from '../Logo/Logo';
import Header from '../Header/Header';
import InputField from '../InputField/InputField';
import Button from '../Button/Button';

import { Link, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { base } from '../../utils/urls'


async function loginUser(credentials) {
  return fetch('http://localhost:8000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })
    .then(data => data.json())
}

async function signupUser(credentials) {
  return fetch('http://localhost:8000/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })
    .then(data => data.json())
}

const Welcome = ({ setToken }) => {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleLoginSubmit = async e => {
    e.preventDefault();

    const token = await loginUser({
      username,
      password,
    })
    console.log(token);
    setToken(token)
  }

  const handleSignupSubmit = async e => {
    e.preventDefault();

    const response = await signupUser({
       username, password
    });

    console.log(response);
  }

  return (
    <div>
      <Card>
        <Logo />
        <Header titleText={"Добро пожаловать"} />
        <InputField setField={setUserName} label={"Электронная почта"} type={"email"} placeholder="yammy@gmail.com" />
        <InputField setField={setPassword} label={"Пароль"} type={"password"} placeholder="yoursecret" />
        <Button handleClick={handleLoginSubmit} text={"Войти"} isUpper={true} isPrimary={true} hasMargin={true}/>
        <Button handleClick={handleSignupSubmit} text={"Создать аккаунт"} isUpper={true} isAccent={true} hasMargin={true} />
      </Card>
    </div>
  )
}

export default Welcome
