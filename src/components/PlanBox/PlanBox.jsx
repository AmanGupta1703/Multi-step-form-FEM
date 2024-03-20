import React from 'react'

import './PlanBox.css'

const PlanBox = ({ title, price, image, selected, onClick, isYearly }) => {
  return (
    <div className={`plan-box ${selected}`} onClick={onClick}>
      <div className="plan-box__img-box">
        <img className="plan-box__img" src={image} alt={title} />
      </div>

      <div className="plan-box__content">
        <h2 className="plan-box__title">{title}</h2>
        <p className="plan-box__price">${price}/mo</p>
        {isYearly && <p className="plan-box__free-monthly">2 months</p>}
      </div>
    </div>
  )
}

export default PlanBox
