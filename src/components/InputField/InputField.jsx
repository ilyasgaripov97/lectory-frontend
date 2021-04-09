import './InputField.css'


const InputField = ({id, setField, label, type, handleChange, placeholder, name, withLabel, margin}) => {
  return (
    <div className="input-field" style={{ margin: margin }}>
      {withLabel && <label className="input-field__label" htmlFor={id}>{ label }</label>}
      <input className="input-field__input" onChange={handleChange} id={id} type={type} name={name} placeholder={placeholder} />
    </div>
  )
}

InputField.defaultProps = {
  type: "text",
  placeholder: "",
  withLabel: true,
  margin: "8px 0 8px 0",
  name: "",
  handleChange: null,
  setField: () => {}
}

export default InputField
