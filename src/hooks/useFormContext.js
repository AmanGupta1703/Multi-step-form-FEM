import React, { useContext } from 'react'

import { FormContext } from '../contexts/FormContext.jsx'

export const useFormContext = () => {
  const context = useContext(FormContext)

  if (!context) {
    throw new Error('useFormContext must be used within a FormContextProvider')
  }

  return context
}
