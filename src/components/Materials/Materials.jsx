import './Materials.css'

import Card from '../Card/Card';
import Menu from '../Menu/Menu';

const Materials = ({ materials, setMaterials }) => {
  return (
    <div className="materials-wrapper">
      <Card>
        <Menu />
      </Card>
      <div className="materials-content">
        <Card margin={"small"}>
        </Card>
      </div>
      
    </div>

  )
}

export default Materials
