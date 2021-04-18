import './Materials.css'

import Card from '../Card/Card';
import Menu from '../Menu/Menu';

const Materials = ({ materials, setMaterials }) => {

  const showMaterials = () => {
    console.log(materials);
  }



  return (
    <div className="materials-wrapper">
      <Card>
        <Menu />
      </Card>
      <div className="materials-content">
        <Card margin={"small"}>
          <h3>История</h3>
          <div className="category-cards">
            <div className="test-card"></div>
            <div className="test-card"></div>
            <div className="test-card"></div>
            <div className="test-card"></div>
            <div className="test-card"></div>
            <div className="test-card"></div>
          </div>
        </Card>
      </div>
    </div>

  )
}

export default Materials
