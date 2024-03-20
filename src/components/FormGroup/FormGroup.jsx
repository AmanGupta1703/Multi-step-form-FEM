import React from 'react'

// styles
import './FormGroup.css'

// components
import { Input } from '../index'

const FormGroup = ({
  label,
  placeholder,
  className,
  type,
  errorMessage,
  value,
  onChange,
}) => {
  return (
    <div className="form__group">
      <div className="form__group-text">
        <label className="form__label" htmlFor="name">
          {label}
        </label>
        <span className="error">{errorMessage}.</span>
      </div>
      <Input
        name={label}
        placeholder={placeholder}
        className={className}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default FormGroup
