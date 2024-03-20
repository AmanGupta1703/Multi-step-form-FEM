import React, { useState } from 'react'

// styles
import './PersonalInfo.css'

// components
import { FormGroup, ButtonNavigation } from '../index'
import { useFormContext } from '../../hooks/useFormContext'

const PersonalInfo = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const [error, setError] = useState('')

  const { dispatch } = useFormContext()

  const handleFormSubmit = e => {
    e.preventDefault()

    if (!name || !email || !phone) {
      setError('Please fill out all fields')
      alert(error)
      return
    }

    dispatch({
      type: 'SET_PERSONAL_FORM_DATA',
      payload: { name, email, phone },
    })
  }

  return (
    <section className="personal-info">
      <h1 className="title">Personal Info</h1>
      <p className="text">
        Please provide your name, email address, and phone number.
      </p>

      <form onSubmit={handleFormSubmit} className="form form--personal-details">
        <FormGroup
          type="text"
          label="name"
          placeholder="eg: Stephen King"
          className="form__input form__input--name"
          errorMessage="Please enter your name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <FormGroup
          type="email"
          label="email"
          placeholder="eg: stephenking@lorem.com"
          className="form__input form__input--email"
          errorMessage="Please enter a valid email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <FormGroup
          type="tel"
          label="phone"
          placeholder="eg: 123-456-7890"
          className="form__input form__input--phone"
          errorMessage="Please enter a valid phone number"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />

        <ButtonNavigation />
      </form>
    </section>
  )
}

export default PersonalInfo
