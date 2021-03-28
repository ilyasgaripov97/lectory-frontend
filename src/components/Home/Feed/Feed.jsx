import './Feed.css';
import Material from './Material/Material';
import { useState, useEffect } from 'react';

import parseJwt from '../../../utils/jwt';


const Feed = () => {
  
  const [materials, setMaterials] = useState([]);

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
    return materials.map((material, index) => <Material key={index} preview_image_path={material.preview_image_path} title={material.title} body={material.body}></Material>)
  }

  return(
    <div className="feed-wrapper">
      <section className="materials-feed-container">
        <h3>Материалы</h3>
        {materialsList()}
      </section>
    </div>
  )
};

export default Feed;