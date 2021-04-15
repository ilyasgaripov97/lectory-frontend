import './Sidebar.css'

import InputField from '../InputField/InputField';
import Button from '../Button/Button';


const Sidebar = ({ materials, setMaterials }) => {

  const like = (expect, actual) => actual.includes(expect)

  const filterMaterials = (e) => {
    if (e.target.value === '') {
      window.location.reload();
      console.log('empty searchbox');
    }
    const updatedMaterials = materials.filter(material => like(e.target.value, material.title));
    setMaterials(updatedMaterials);
  }

  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-wrapper__searchbox">
        <InputField handleChange={filterMaterials} handleBlur={filterMaterials} label={"Искать"} withLabel={true}/>
      </div>
      
      <p> 
        
      </p>
    </div>
  )
}

export default Sidebar;