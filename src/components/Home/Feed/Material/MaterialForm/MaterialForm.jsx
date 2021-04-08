import './MaterialForm.css'

import { useState } from 'react';
import parseJwt from '../../../../../utils/jwt';
import InputField from '../../../../InputField/InputField';
import Button from '../../../../Button/Button';
import ImageUploader from './ImageUploader/ImageUploader';


const storeMaterial = async (material, id_user, file=null) => {
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
  console.log('updating');
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
  const [file, setFile] = useState(null);

  const handleMaterialSubmit = async e => {
    e.preventDefault();

    const id_user = parseJwt(localStorage.getItem('token')).id_user;

    await storeMaterial({ material: {
      title,
      body,
    }}, id_user)
    await updateMaterials(setMaterials);
  }

  return(
    <div className="material-form-wrapper">
      <ImageUploader></ImageUploader>
      <form className="material-form">
        <InputField 
          setField={setTitle} 
          label={"Заголовок материала"} 
          type={"text"} 
          placeholder="e.g Большой кот" 
        />
        <InputField 
          id="preview_image" 
          setField={setBody} 
          label={"Изображение"} 
          type={"file"} 
          name={"test"} 
          placeholder="e.g Любой текст" 
        />
        <InputField 
          setField={setBody} 
          label={"Текст"} 
          type={"text"} 
          placeholder="e.g Любой текст"
        />
        <Button
          handleClick={handleMaterialSubmit} 
          type={"submit"} 
          text="Добавить" 
          isPrimary={true} 
          isUpper={true}>
        </Button>
      </form>
    </div>
  )
}

export default MaterialForm