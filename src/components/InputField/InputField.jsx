import './InputField.css'


const InputField = ({id, label, type, handleChange, handleBlur, placeholder, name, withLabel, margin}) => {
  return (
    <div className="input-field" style={{ margin: margin }}>
      {withLabel && <label className="input-field__label" htmlFor={id}>{ label }</label>}
      <input className="input-field__input" onChange={handleChange} onBlur={handleBlur} id={id} type={type} name={name} placeholder={placeholder} />
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
  handleBlur: null,
  setField: () => {}
}

export default InputField
