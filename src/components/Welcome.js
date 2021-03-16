import Card from './Card';
import Logo from './Logo';
import Header from './Header';
import InputField from './InputField';
import Button from './Button';

import { Link, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { base } from '../utils/urls'


const Welcome = ({ handleOnClick }) => {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {

    fetch("http://127.0.0.1:5000/signup", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: 'ilyas', password: "garipov" })
    })
      .then(res => res.json())
      .then(
        (result) => {
          setLoggedIn(true)
          localStorage.setItem('token', result)
        },
        (error) => {
          console.log(error);
        }
      )

    // const bearer = 'Bearer' + localStorage.getItem('token')
    const bearer = `Bearer ${localStorage.getItem('token')}`
    console.log(bearer);
    fetch("http://127.0.0.1:5000/secret", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': bearer,  
      },
    })
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      )
      
  }, [])

  return (
    <div>
      <Card>
        {loggedIn ? <Redirect to="/home" /> : ""}
        <Logo />
        <Header titleText={"Добро пожаловать"} />
        <InputField label={"Электронная почта"} type={"email"} placeholder="yammy@gmail.com" />
        <InputField label={"Пароль"} type={"password"} placeholder="yoursecret" />
        <Link to="/home">
          <Button text={"Войти"} isUpper={true} isPrimary={true} hasMargin={true}/>
        </Link>
        <Button text={"Создать аккаунт"} isUpper={true} isAccent={true} hasMargin={true} />
      </Card>
    </div>
  )
}

export default Welcome
