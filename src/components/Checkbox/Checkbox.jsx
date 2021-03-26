import './Checkbox.css'


const Checkbox = ({ handleClick, checked }) => {

  const logger = () => {
    console.log('Logger call: ', checked);
  }

  return (
    <div className="checkbox-wrapper" >
      <input type="checkbox" defaultChecked={checked} onClick={handleClick}/>
    </div>
  )
}


export default Checkbox