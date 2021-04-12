import './Feed.css';
import Material from './Material/Material';
import MaterialForm from './Material/MaterialForm/MaterialForm'

import { useState, useEffect } from 'react';

import parseJwt from '../../../utils/jwt';
import Button from '../../Button/Button';


const Feed = () => {
  
  const [materials, setMaterials] = useState([]);
  const [isCreateFormOpen, setIsCreateFormOpen] = useState(false)
  const [createFormText, setCreateFormText] = useState('Создать')

  useEffect(async () => {
    const id_user = parseJwt(localStorage.getItem('token')).id_user;
    const response = await fetch(`http://localhost:8000/user/${id_user}/materials`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const json = await response.json();
    setMaterials(json.data)
  }, [])
  
  const materialsList = () => {
    console.log(materials);
    return materials.map(
      (material, index) => 
      <Material
        key={index}
        id={material.id} 
        preview_image_path={material.preview_image_path}
        title={material.title} 
        body={material.body}
        materials={materials}
        setMaterials={setMaterials}>
      </Material>
    )
  }

  const getCreateButtonText = () => {
    return isCreateFormOpen ? 'Создать' : 'Отменить';
  } 

  const handleFormOpening = () => { 
    console.log(!isCreateFormOpen);
    setIsCreateFormOpen(!isCreateFormOpen)
    setCreateFormText(getCreateButtonText(isCreateFormOpen))
  }

  return(
    <div className="feed-wrapper">
      <section className="materials-feed-container">
        <h3>Избранное</h3>
        <div className="materials-feed-container__create">
          {/* TODO refactor/fix spelling weight in button shoud be width */}
          {
            <Button 
              hasMargin={true}
              text={createFormText}
              height="48px" 
              weight="30px" 
              handleClick={handleFormOpening}>
            </Button>
          }
        </div>
        {isCreateFormOpen &&
          <MaterialForm setMaterials={setMaterials} handleFormOpeneing={handleFormOpening}/>
        }
        {materialsList()}
      </section>
    </div>
  )
};

export default Feed;