import './Checkbox.css'


const Checkbox = ({ handleClick }) => {

  return (
    <div className="checkbox-wrapper" onClick={handleClick}>
      <input type="checkbox"/>
    </div>
  )
}

export default Checkbox