import React, { useState } from 'react'

// styles
import './AddOn.css'

// components
import { AddonBox, ButtonNavigation } from '../index'

// hooks
import { useFormContext } from '../../hooks/useFormContext'

const addOnsData = [
  {
    id: 0,
    name: 'Online service',
    info: 'Access to multiplayer games',
    price: 1,
    checked: false,
  },
  {
    id: 1,
    name: 'Larger storage',
    info: 'Extra 1TB of cloud save',
    price: 2,
    checked: false,
  },
  {
    id: 2,
    name: 'Customizable Profile',
    info: 'Custom theme on your profile',
    price: 2,
    checked: false,
  },
]

const AddOn = () => {
  const [addOns, setAddOns] = useState(addOnsData)

  const { dispatch } = useFormContext()

  const handleClick = id => {
    setAddOns(
      addOns.map(addOn =>
        addOn.id === id ? { ...addOn, checked: !addOn.checked } : addOn
      )
    )
  }

  const handleSubmit = e => {
    e.preventDefault()

    const checkedAddOns = addOns.filter(addOn => addOn.checked)

    if (checkedAddOns.length === 0) {
      return alert('Please pick at least one add-on')
    }

    dispatch({
      type: 'SET_ADDONS',
      payload: checkedAddOns,
    })
  }

  const handlePreviousStep = e => {
    e.preventDefault()
    dispatch({
      type: 'SET_STATUS',
      payload: 'plan',
    })
  }

  return (
    <form className="add-ons" onSubmit={handleSubmit}>
      <h1 className="title">Pick add-ons</h1>
      <p className="text">Add-ons help enhance your gaming experience.</p>

      <div className="add-ons-container">
        {addOns.map(addOn => (
          <AddonBox
            {...addOn}
            key={addOn.id}
            handleClick={() => handleClick(addOn.id)}
          />
        ))}
      </div>

      <ButtonNavigation onPreviousClick={handlePreviousStep} />
    </form>
  )
}

export default AddOn
