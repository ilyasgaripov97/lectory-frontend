import './Material.css';
import Button from '../../../Button/Button'

import { Link } from 'react-router-dom';
import parseJwt from '../../../../utils/jwt';


async function removeMaterial (id_material) {
  const id_user = parseJwt(localStorage.getItem('token')).id_user;
  return fetch(`http://localhost:8000/user/${id_user}/materials/${id_material}/remove`, {
    method: 'POST'
  });
}


const Material = ({ id, title, body, preview_image_path, materials, setMaterials }) => {

  const handleRemove = async () => {
    setMaterials(materials.filter(material => material.id !== id));
    await removeMaterial(id);
  }

  return(
      <div className="material-wrapper">
        <header className="material-wrapper__header">
        <h4>{title}</h4>
        <div className="delete-material">
          <Button isAccent={true} handleClick={handleRemove} height="24px" text="Удалить"></Button>
        </div>
        </header>

        <Link to={`materials/${id}`}>
          <img className="material-preview-image" src={preview_image_path} alt=""/>
        </Link>
        <p>{body}</p>

      </div>
  )
}

export default Material