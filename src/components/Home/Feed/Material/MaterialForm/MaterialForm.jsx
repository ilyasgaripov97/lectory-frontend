import './MaterialForm.css'

import { useState } from 'react';
import parseJwt from '../../../../../utils/jwt';

import InputField from '../../../../InputField/InputField';
import Button from '../../../../Button/Button';
import ImageDropbox from '../../../../ImageDropbox/ImageDropbox';


const storeMaterial = async (material, id_user) => {
  return fetch(`http://localhost:8000/user/${id_user}/materials/new`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(material),
  })
    .then(data => data.json())
}

const updateMaterials = async (setMaterials) => {
  const id_user = parseJwt(localStorage.getItem('token')).id_user;
  const response = await fetch(`http://localhost:8000/user/${id_user}/materials`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const json = await response.json();
  setMaterials(json.data);
}

const MaterialForm = ({ setMaterials }) => {

  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const handleMaterialSubmit = async e => {
    e.preventDefault();

    const id_user = parseJwt(localStorage.getItem('token')).id_user;

    await storeMaterial({ material: {
      title,
      body,
    }}, id_user)
    await updateMaterials(setMaterials)
  }

  return(
    <div className="material-form-wrapper">
      <form className="material-form" action="">
        <InputField setField={setTitle} label={"Заголовок материала"} type={"text"} placeholder="e.g Большой кот" />
        <ImageDropbox/>
        <InputField setField={setBody} label={"Текст"} type={"text"} placeholder="e.g Любой текст" />
        <InputField  label={"Текст"} type={"file"} placeholder="e.g Любой текст" />
        <Button handleClick={handleMaterialSubmit} text="Новый кот?" isPrimary={true} isUpper={true}></Button>
      </form>
    </div>
  )
}

export default MaterialForm