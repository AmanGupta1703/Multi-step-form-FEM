import React from 'react'

import { useFormContext } from '../../hooks/useFormContext'

import './ButtonNavigation.css'

const ButtonNavigation = ({ onPreviousClick }) => {
  const { status } = useFormContext()

  return (
    <div
      className="button-navigation"
      style={{
        justifyContent:
          status === 'personal-info' ? 'flex-end' : 'space-between',
      }}
    >
      {status !== 'personal-info' && (
        <button
          onClick={onPreviousClick}
          type="submit"
          className="button-navigation__btn button-navigation__btn--back"
        >
          Go Back
        </button>
      )}
      <button
        type="submit"
        className="button-navigation__btn button-navigation__btn--next"
      >
        Next
      </button>
    </div>
  )
}

export default ButtonNavigation
