import React from 'react'

import { IconThankYou } from '../../assets'

import './ThankYour.css'

const ThankYou = () => {
  return (
    <section className="thank-you">
      <div className="wrapper">
        <div className="thank-you__img-container">
          <img
            src={IconThankYou}
            alt="correct sign"
            className="thank-you__img"
          />
        </div>
        <h1 className="title">Thank you!</h1>
        <p className="text">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </section>
  )
}

export default ThankYou
