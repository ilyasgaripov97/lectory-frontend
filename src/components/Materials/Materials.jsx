import './Materials.css'

import Card from '../Card/Card';
import Menu from '../Menu/Menu';
import Button from '../Button/Button';

const Materials = ({ materials, setMaterials }) => {

  const materialsList = () => {
    console.log(materials);
    return materials.map(
      (material, index) =>
      <div key={index} className="materials-cards__card">
        <div className="materials-card">
          <img src={material.preview_image_path} width="400" height="240" alt=""/>
          <div className="materials-card__body">{material.body}</div>
          <Button text="Добавить" isPrimary={true} height="20px"/>
          
        </div>
      </div>
    )
  }
  
  return (
    <div className="materials-wrapper">
      <Card>
        <Menu />
      </Card>
      <div className="materials-content">
        <Card margin={"small"}>
          <div className="materials-cards">
            { materialsList() }
          </div>
        </Card>
      </div>
    </div>

  )
}

export default Materials
