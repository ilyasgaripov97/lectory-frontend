import Card from './Card';
import Logo from './Logo';
import Header from './Header';
import InputField from './InputField';
import Button from './Button';

import { Link, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';


function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}

const Welcome = ({ handleOnClick }) => {
  const csrftoken = getCookie('csrftoken');
  let [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {

    fetch("http://127.0.0.1:8000/api/examples/", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken,
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
  

    // fetch("http://127.0.0.1:8000/api/examples/", {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'X-CSRFToken': csrftoken,
    //   },
    //   body: JSON.stringify({ name: 'qqq'})
    // })
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       console.log(result.Error);
    //       if (result.Error === null) setLoggedIn(true); 
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   )


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
