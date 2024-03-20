import React from 'react'

import './AddonBox.css'

const AddonBox = ({ name, info, price, checked, handleClick }) => {
  console.log(checked)
  return (
    <div className="add-ons-box">
      <label className="add-ons__label" onClick={handleClick}>
        <input type="checkbox" className="add-ons__checkbox" value={checked} />
        <p className="add-ons__info">
          <span className="add-ons__name">{name}</span>
          <span className="add-ons__info__text">{info}</span>
        </p>
        <p className="add-ons__price">+${price}/mo</p>
      </label>
    </div>
  )
}

export default AddonBox
