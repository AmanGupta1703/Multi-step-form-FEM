import React from 'react'

// css
import './Box.css'

// images
import { BackgroundMobile, BackgroundDesktop } from '../../assets'

// context
import { useFormContext } from '../../hooks/useFormContext'

// components
import {
  ButtonStep,
  PersonalInfo,
  Plan,
  AddOn,
  SummaryBox,
  ThankYou,
} from '../index'

const Box = () => {
  const { status, personlFormData, dispatch } = useFormContext()

  return (
    <article className="box" data-aos="zoom-in">
      <div className="box__header">
        <div className="box__img-box">
          <img
            srcSet={`${BackgroundMobile} 375w,
    ${BackgroundDesktop} 1440w`}
            sizes="(max-width: 767px) 280px,
   (min-width: 768px) 800px"
            src={BackgroundMobile}
            alt="Responsive Image"
            className="box__bg-img"
          />
        </div>

        <div className="button-container">
          <div className="button-box">
            <ButtonStep
              className={`btn--step-1 ${
                status === 'personal-info' ? 'active' : ''
              }`}
              step={1}
            >
              1
            </ButtonStep>
            <div className="step-info">
              <span className="step-info__number">step 1</span>
              <span className="step-info__value">your info</span>
            </div>
          </div>

          <div className="button-box">
            <ButtonStep
              className={`btn--step-2 ${status === 'plan' ? 'active' : ''}`}
              step={2}
            >
              2
            </ButtonStep>
            <div className="step-info">
              <span className="step-info__number">step 2</span>
              <span className="step-info__value">select plan</span>
            </div>
          </div>

          <div className="button-box">
            <ButtonStep
              className={`btn--step-3 ${status === 'addons' ? 'active' : ''}`}
              step={3}
            >
              3
            </ButtonStep>
            <div className="step-info">
              <span className="step-info__number">step 3</span>
              <span className="step-info__value">add ons</span>
            </div>
          </div>

          <div className="button-box">
            <ButtonStep
              className={`btn--step-4 ${status === 'payment' ? 'active' : ''}`}
              step={4}
            >
              4
            </ButtonStep>
            <div className="step-info">
              <span className="step-info__number">step 4</span>
              <span className="step-info__value">summary</span>
            </div>
          </div>
        </div>
      </div>

      <div className="box__content">
        {status === 'personal-info' && <PersonalInfo />}
        {status === 'plan' && <Plan />}
        {status === 'addons' && <AddOn />}
        {status === 'payment' && <SummaryBox />}
        {status === 'thank-you' && <ThankYou />}
      </div>
    </article>
  )
}

export default Box
