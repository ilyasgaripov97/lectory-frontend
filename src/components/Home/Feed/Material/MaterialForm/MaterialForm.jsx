import './MaterialForm.css'

import { useState } from 'react';
import parseJwt from '../../../../../utils/jwt';

import InputField from '../../../../InputField/InputField';
import Button from '../../../../Button/Button';


const signupMaterial = async (material, id_user) => {
  return fetch(`http://localhost:8000/user/${id_user}/materials/new`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(material),
  })
    .then(data => data.json())
}

const MaterialForm = () => {

  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const handleMaterialSubmit = async e => {
    e.preventDefault();

    const id_user = parseJwt(localStorage.getItem('token')).id_user;

    await signupMaterial({ material: {
      title,
      body,
    }}, id_user)
  }

  return(
    <div className="material-form-wrapper">
      <form className="material-form" action="">
        <InputField setField={setTitle} label={"Заголовок материала"} type={"text"} placeholder="e.g Большой кот" />
        <InputField setField={setBody} label={"Текст"} type={"text"} placeholder="e.g Любой текст" />
        <Button handleClick={handleMaterialSubmit} text="Новый кот?" isPrimary={true} isUpper={true}></Button>
      </form>
    </div>
  )
}

export default MaterialForm