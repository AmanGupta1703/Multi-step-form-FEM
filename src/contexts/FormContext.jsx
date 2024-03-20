import { createContext, useReducer } from 'react'

export const FormContext = createContext()

// status => personal-info, plan, addons, payment, thank-you

const initialState = {
  personalFormData: { name: '', email: '', phone: '' },
  status: 'personal-info',
  plan: {},
  isYearlyBilling: false,
  addOns: [],
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_PERSONAL_FORM_DATA':
      return { ...state, personalFormData: action.payload, status: 'plan' }
    case 'SET_PLAN':
      return { ...state, plan: action.payload }
    case 'SET_STATUS':
      return { ...state, status: action.payload }
    case 'SET_ADDONS':
      return { ...state, addOns: action.payload, status: 'payment' }
    case 'SET_BILLING':
      return {
        ...state,
        isYearlyBilling: action.payload,
        plan: action.payload
          ? { ...state.plan, price: state.plan.price * 10 }
          : state.plan,
      }
    default:
      return state
  }
}

export const FormContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <FormContext.Provider value={{ ...state, dispatch }}>
      {children}
    </FormContext.Provider>
  )
}
