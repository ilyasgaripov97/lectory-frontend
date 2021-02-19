import './Card.css'

import { useState } from 'react'


const Card = (props) => {
  return (
    <div className="card">
      <div className="card__content">
        {props.children}
      </div>
    </div>
  )
}

export default Card
