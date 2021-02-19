import './InputField.css'


const InputField = ({id, label, type, placeholder, withLabel, margin}) => {
  return (
    <div className="input-field" style={{ margin: margin }}>
      {withLabel && <label className="input-field__label" htmlFor={id}>{ label }</label>}
      <input className="input-field__input" id={id} type={type} placeholder={placeholder}/>
    </div>
  )
}

InputField.defaultProps = {
  type: "text",
  placeholder: "",
  withLabel: true,
  margin: "8px 0 8px 0",
}

export default InputField
