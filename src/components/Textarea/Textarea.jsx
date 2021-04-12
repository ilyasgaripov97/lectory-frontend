import './Textarea.css'
import React from 'react'

const Textarea = ({ withLabel, label, handleChange }) => {
  return (
    <div className="textarea-wrapper">
      {withLabel && <label className="textarea-wrapper__label" >{label}</label>}
      <textarea className="textarea-wrapper__textarea" name="" id="" onChange={handleChange}></textarea>
    </div>
  )
}

export default Textarea
