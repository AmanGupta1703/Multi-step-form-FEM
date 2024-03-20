import React from 'react'

import './SummaryBox.css'
import ButtonNavigation from '../ButtonNavigation/ButtonNavigation'
import { useFormContext } from '../../hooks/useFormContext'

const SummaryBox = () => {
  const { plan, addOns, isYearlyBilling, dispatch } = useFormContext()

  const addOnsPrice = addOns.reduce((acc, addOn) => acc + addOn.price, 0)

  const total = plan.price + addOnsPrice

  const handleSubmit = e => {
    e.preventDefault()

    dispatch({ type: 'SET_STATUS', payload: 'thank-you' })
  }

  const handlePreviousStep = e => {
    e.preventDefault()
    dispatch({ type: 'SET_STATUS', payload: 'addons' })
  }

  return (
    <form onSubmit={handleSubmit} className="summary">
      <h1 className="title">Finishing up</h1>
      <p className="text">
        Double-check everything looks OK before confirming.
      </p>

      <div className="summary__wrapper">
        <div className="summary__box summary__box--plan">
          <div>
            <p className="summary__box--plan__name">
              {plan.title} {isYearlyBilling ? '(Yearly)' : '(Monthly)'}
            </p>
            <a
              href=""
              className="btn--change-plan"
              onClick={e => {
                e.preventDefault()
                dispatch({ type: 'SET_STATUS', payload: 'plan' })
              }}
            >
              Change
            </a>
          </div>
          <p className="summary__box__price">${plan.price}/mo</p>
        </div>

        {addOns.length &&
          addOns.map(addOn => (
            <div key={addOn.id} className="summary__box summary__box--add-on">
              <p className="summary__box--add-on__name">{addOn.name}</p>
              <p className="summary__box__price">${addOn.price}/mo</p>
            </div>
          ))}
      </div>

      <div className="summary__total">
        <p className="summary__total__text">Total (per month)</p>
        <p className="summary__total__price">${total}/mo</p>
      </div>

      <ButtonNavigation onPreviousClick={handlePreviousStep} />
    </form>
  )
}

export default SummaryBox
