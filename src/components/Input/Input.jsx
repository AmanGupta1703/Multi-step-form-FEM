import React from 'react'

// styles
import './Input.css'

const Input = ({
  type = 'text',
  name = '',
  placeholder = '',
  className = '',
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={className}
      value={value}
      onChange={onChange}
    />
  )
}

export default Input
