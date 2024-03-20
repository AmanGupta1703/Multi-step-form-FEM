import React, { useState } from 'react'

// styles
import './Plan.css'

// images
import { IconArcade, IconAdvance, IconPro } from '../../assets'

// components
import { ButtonNavigation, PlanBox } from '../index'
import { useFormContext } from '../../hooks/useFormContext'

const planDetailsMonthly = [
  {
    title: 'Arcade',
    price: 9,
    image: IconArcade,
  },
  {
    title: 'Advance',
    price: 12,
    image: IconAdvance,
  },
  {
    title: 'Pro',
    price: 15,
    image: IconPro,
  },
]

const planDetailsYearly = [
  {
    title: 'Arcade',
    price: 90,
    image: IconArcade,
  },
  {
    title: 'Advance',
    price: 120,
    image: IconAdvance,
  },
  {
    title: 'Pro',
    price: 150,
    image: IconPro,
  },
]

const Plan = () => {
  const { dispatch, isYearlyBilling } = useFormContext()

  const [selected, setSetselected] = useState(null)
  const [isYearly, setisYearly] = useState(isYearlyBilling)

  const handlePlanClick = index => {
    const selectedPlan = isYearly
      ? planDetailsYearly[index]
      : planDetailsMonthly[index]
    const { title, price } = selectedPlan

    dispatch({
      type: 'SET_PLAN',
      payload: { title, price },
    })

    setSetselected(index)
  }

  const handleBillingChange = () => {
    setisYearly(!isYearly)
    dispatch({
      type: 'SET_BILLING',
      payload: !isYearly,
    })
  }

  const handlePlanSubmit = e => {
    e.preventDefault()

    if (selected === null) {
      return
    }

    dispatch({
      type: 'SET_STATUS',
      payload: 'addons',
    })
  }

  const handlePreviousStep = e => {
    e.preventDefault()
    dispatch({
      type: 'SET_STATUS',
      payload: 'personal-info',
    })
  }

  const planDetails = isYearly ? planDetailsYearly : planDetailsMonthly

  return (
    <form className="plan" onSubmit={handlePlanSubmit}>
      <h1 className="title">Select your plan</h1>
      <p className="text">You have the option for monthly or yearly billing.</p>

      <div className="plan-box-container">
        {planDetails.map((plan, index) => (
          <PlanBox
            key={plan.title}
            onClick={() => handlePlanClick(index)}
            {...plan}
            isYearly={isYearly}
            selected={selected === index ? 'selected' : ''}
          />
        ))}
      </div>

      <div className="term term--toggle">
        <button className="term__btn term__btn--monthly">Monthly</button>
        <div className="toggle">
          <label>
            <input
              type="checkbox"
              className="toggle__input toggle__input--checkbox"
              checked={isYearly}
              onChange={handleBillingChange}
            />
            <div className="switch"></div>
          </label>
        </div>
        <button className="term__btn term__btn--yearly">Yearly</button>
      </div>

      <ButtonNavigation onPreviousClick={handlePreviousStep} />
    </form>
  )
}

export default Plan
