import './Sidebar.css'

import InputField from '../InputField/InputField';
import Button from '../Button/Button';


const Sidebar = ({ materials }) => {


  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-wrapper__searchbox">
        <InputField label={"Искать"} withLabel={true}/>
      </div>
      
      <p> 
        
      </p>
    </div>
  )
}

export default Sidebar;