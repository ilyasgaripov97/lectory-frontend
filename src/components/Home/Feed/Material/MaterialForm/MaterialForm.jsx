import './MaterialForm.css'

import { useState } from 'react';
import parseJwt from '../../../../../utils/jwt';
import InputField from '../../../../InputField/InputField';
import Button from '../../../../Button/Button';
import Textarea from '../../../../Textarea/Textarea'

import { storeMaterial, updateMaterials } from './requests';

const MaterialForm = ({ setMaterials, handleFormOpeneing }) => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [currentFile, setCurrentFile] = useState(null);

  const handleMaterialSubmit = async e => {
    e.preventDefault();

    const id_user = parseJwt(localStorage.getItem('token')).id_user;

    const data = new FormData();
    data.append('preview_image', currentFile);
    data.append('title', title);
    data.append('body', body);
  
    await storeMaterial(id_user, data)
    await updateMaterials(setMaterials);
    handleFormOpeneing()
  }

  const handleFileChange = async e => {
    setCurrentFile(e.target.files[0]);
  }
  
  const handleTitleChange = async e => {
    setTitle(e.target.value)
  }

  const handleBodyChange = async e => {
    setBody(e.target.value)
  }

  return(
    <div className="material-form-wrapper">
      <form className="material-form">
        <InputField 
          setField={setTitle} 
          label={"Заголовок материала"} 
          type={"text"} 
          handleChange={handleTitleChange}
          placeholder="e.g Большой кот" 
        />
        <InputField 
          id="preview_image" 
          setField={setBody} 
          label={"Изображение"} 
          type={"file"} 
          name={"test"} 
          handleChange={handleFileChange}
          placeholder="e.g Любой текст" 
        />
        <Textarea withLabel={true} label="Текст" handleChange={handleBodyChange}>

        </Textarea>
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