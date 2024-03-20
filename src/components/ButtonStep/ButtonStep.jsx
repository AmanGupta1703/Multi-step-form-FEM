import React from 'react'

// css
import './ButtonStep.css'

const ButtonStep = ({ children, className, step }) => {
  return (
    <button
      type="button"
      className={`btn btn--step ${className}`}
      data-step={step}
    >
      {children}
    </button>
  )
}

export default ButtonStep
