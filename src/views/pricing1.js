import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import CTA26 from '../components/cta26'
import './pricing1.css'

const Pricing1 = (props) => {
  return (
    <div className="pricing1-container">
      <Helmet>
        <title>Pricing1 - Spotless Hungry Crocodile</title>
        <meta
          property="og:title"
          content="Pricing1 - Spotless Hungry Crocodile"
        />
      </Helmet>
      <CTA26
        action1={
          <Fragment>
            <span className="pricing1-text1">Get Started</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="pricing1-text2">
              Sign up now to access our user-friendly platform and reach your
              target audience effectively.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="pricing1-text3">
              Start sending professional emails today!
            </span>
          </Fragment>
        }
      ></CTA26>
    </div>
  )
}

export default Pricing1
