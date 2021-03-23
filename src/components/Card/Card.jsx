import './Card.css'

import { useState } from 'react'


const Card = (props) => {

  let className = 'card';

  if (props.margin) {
    className += ` margin-${props.margin}`;
  }

  return (
    <div className={className}>
      <div className="card__content">
        {props.children}
      </div>
    </div>
  )
}

export default Card
