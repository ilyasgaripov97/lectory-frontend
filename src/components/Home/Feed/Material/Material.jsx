import './Material.css';

import MaterialForm from './MaterialForm/MaterialForm'


const Material = ({title, body, preview_image_path}) => {

  console.log(preview_image_path);

  return(
    <div className="material-wrapper">
      <MaterialForm />
      <h4>{title}</h4>
      <img src={preview_image_path} height="600" alt=""/>
      <p>{body}</p>
    </div>
  )
}

export default Material