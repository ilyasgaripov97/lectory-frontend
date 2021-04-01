import './Material.css';



const Material = ({title, body, preview_image_path}) => {

  return(
    <div className="material-wrapper">
      <h4>{title}</h4>
      <img className="material-preview-image" src={preview_image_path} alt=""/>
      <p>{body}</p>
    </div>
  )
}

export default Material