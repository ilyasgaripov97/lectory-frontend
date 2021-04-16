import './Sidebar.css'

import InputField from '../InputField/InputField';
import Button from '../Button/Button';

import parseJwt from '../../utils/jwt';

async function fetchMaterials () {
  try {
    const id_user = parseJwt(localStorage.getItem('token')).id_user;
    const response = await fetch(`http://localhost:8000/user/${id_user}/materials`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

const Sidebar = ({ materials, setMaterials }) => {

  const like = (expect, actual) => actual.includes(expect)

  const filterMaterials = async (e) => {
    if (e.target.value === '') {
      const json = await fetchMaterials();
      setMaterials(json.data)
      return;
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