import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <header className={`navbar-container ${props.rootClassName} `}>
      <header data-thq="thq-navbar" className="navbar-navbar-interactive">
        <img
          alt={props.logoAlt}
          src={props.logoSrc}
          className="navbar-image1"
        />
        <div data-thq="thq-navbar-nav" className="navbar-desktop-menu">
          <nav className="navbar-links1">
            <span>
              {props.link11 ?? (
                <Fragment>
                  <span className="navbar-link13 thq-link thq-body-small">
                    <span>الصفحة الرئيسية</span>
                    <br></br>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="thq-link thq-body-small">{props.link2}</span>
            <span className="thq-link thq-body-small">{props.link3}</span>
            <span className="thq-link thq-body-small">{props.link4}</span>
            <span className="thq-link thq-body-small">{props.link5}</span>
          </nav>
          <div className="navbar-buttons1">
            <button className="navbar-action11 thq-button-filled thq-button-animated">
              <span className="thq-body-small">تواصل معنا</span>
            </button>
            <button className="navbar-action21 thq-button-outline thq-button-animated">
              <span className="thq-body-small">
                <span>المنتجات</span>
                <br></br>
              </span>
            </button>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="navbar-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar-icon1">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
          <div className="navbar-nav">
            <div className="navbar-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navbar-logo"
              />
              <div data-thq="thq-close-menu" className="navbar-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar-icon3">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar-links2">
              <span className="thq-link thq-body-small">{props.link1}</span>
              <span className="thq-link thq-body-small">{props.link2}</span>
              <span className="thq-link thq-body-small">{props.link3}</span>
              <span className="thq-link thq-body-small">{props.link4}</span>
              <span className="thq-link thq-body-small">{props.link5}</span>
            </nav>
          </div>
          <div className="navbar-buttons2">
            <button className="thq-button-filled">Login</button>
            <button className="thq-button-outline">Register</button>
          </div>
        </div>
      </header>
    </header>
  )
}

Navbar.defaultProps = {
  link3: 'الاسعار',
  action1: '/home',
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  link2: 'عن المنصة',
  link1: 'Home',
  link11: undefined,
  link5: 'Contact Us',
  logoAlt: 'Email Sending Website',
  rootClassName: '',
  action2: '/pricing',
  link4: 'Dashboard',
}

Navbar.propTypes = {
  link3: PropTypes.string,
  action1: PropTypes.string,
  logoSrc: PropTypes.string,
  link2: PropTypes.string,
  link1: PropTypes.string,
  link11: PropTypes.element,
  link5: PropTypes.string,
  logoAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  action2: PropTypes.string,
  link4: PropTypes.string,
}

export default Navbar
