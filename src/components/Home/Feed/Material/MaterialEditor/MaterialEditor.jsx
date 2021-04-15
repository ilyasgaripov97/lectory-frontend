import './MaterialEditor.css'

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import parseJwt from '../../../../../utils/jwt';

import Card from '../../../../Card/Card';
import Menu from '../../../../Menu/Menu'

async function updateMaterial(id_material, material) {
  const id_user = parseJwt(localStorage.getItem('token')).id_user;

  const result = await fetch(`http://localhost:8000/user/${id_user}/materials/${id_material}/update`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(material)
  })
  const json = await result.json();
}

const updateMaterialImage = async (id_user, id_material, data=null, setImage) => {
  const response = await fetch(`http://localhost:8000/user/${id_user}/materials/${id_material}/update_image`, {
    method: 'POST',
    body: data,
  })
  const json = await response.json()
  setImage(json.imgPath)
}

const MaterialEditor = () => {
  const [title, setTitle] = useState('');
  const [previewImagePath, setPreviewImagePath] = useState('');
  const [body, setBody] = useState('');
  const [currentFile, setCurrentFile] = useState(null)

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

  const handleFileChange = async e => {
    setCurrentFile(e.target.files[0]);
    const id_user = parseJwt(localStorage.getItem('token')).id_user;
    const data = new FormData();

    // TODO переписать через refs
    // https://vk.com/im?peers=c69_c24&sel=136747722&z=photo136747722_457254408%2Fmail176305
    const titleInput = document.querySelector('.material-title-input');
    setTitle(titleInput.value);
    
    const bodyInput = document.querySelector('.material-body-input');
    setBody(bodyInput.value);


    data.append('updated_material_image', currentFile);
    data.append('title', title);
    data.append('body', body)

    console.log('title and body', title, body);
    setTitle(title);

    await updateMaterialImage(id_user, id_material, data, setPreviewImagePath);
  }

  const handleTitleChange = async (e) => { 
    const title = e.target.value;
    updateMaterial(id_material, { title, previewImagePath, body });
  }

  const handleBodyChange = async (e) => {
    const body = e.target.value;
    updateMaterial(id_material, { title, previewImagePath, body})
  }

  const handleImageChange = async (e) => {
    const fileInput = document.querySelector('.material-editor-file-upload');
    fileInput.click();
    fileInput.addEventListener('change', e => {
      setCurrentFile(fileInput.files[0]);
    })
  }


  return (
    <div className="material-editor">
      <Card>
        <Menu />
      </Card>
      <div className="content-wrapper">
      <Card margin={"small"}>
          <h3 className="material-title"><input className="material-title-input" type="text" onBlur={handleTitleChange} defaultValue={title}/></h3>
            <img className="material-image" src={previewImagePath} onClick={handleImageChange} alt=""/>
          <p className="material-text"><textarea className="material-body-input" onBlur={handleBodyChange} type="text" defaultValue={body}></textarea></p>
          <form>
          <input type="file" className="material-editor-file-upload" onChange={handleFileChange}/>
          </form>
      </Card>  
      </div>
      
    </div>
  )
}

export default MaterialEditor
