import Card from './Card';
import Logo from './Logo';
import Header from './Header';
import InputField from './InputField';
import Button from './Button';

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


const Welcome = ({ handleOnClick }) => {

  useEffect(() => {
    fetch("http://..")
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
