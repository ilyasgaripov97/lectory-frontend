import './MaterialEditor.css'

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import parseJwt from '../../../../../utils/jwt';

import Card from '../../../../Card/Card';
import Menu from '../../../../Menu/Menu'

const MaterialEditor = () => {
  const [title, setTitle] = useState('');
  const [previewImagePath, setPreviewImagePath] = useState('');
  const [body, setBody] = useState('');

  let { id_material } = useParams();

  useEffect(async () => {
    const id_user = parseJwt(localStorage.getItem('token')).id_user;

    try {
      const result = await fetch(`http://localhost:8000/user/${id_user}/materials/${id_material}`, {
        method: 'GET'
      });
      const json = await result.json();
      setTitle(json.data.title);
      setPreviewImagePath(json.data.preview_image_path);
      setBody(json.data.body);
    }
    catch (error) {
      console.log(error);
    }
  }, [])

  return (
    <div className="material-editor">
      <Card>
        <Menu />
      </Card>
      <div className="content-wrapper">
      <Card margin={"small"}>
        <h3>{title}</h3>
        <img className="material-image" src={previewImagePath} alt=""/>
        <p>{body}</p>
      </Card>  
      </div>
      
    </div>
  )
}

export default MaterialEditor
