import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container10">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container13">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text14 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container15">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text17 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container17">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text20 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card4">
                <div className="testimonial-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image4"
                  />
                  <div className="testimonial-container19">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text23 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  author3Position: 'Digital Marketer',
  author4Position: 'Small Business Owner',
  author1Alt: 'Image of John Doe',
  author1Name: 'John Doe',
  author2Position: 'CEO',
  author4Name: 'Sarah Johnson',
  author2Src:
    'https://images.unsplash.com/photo-1485618609651-5a8bd6efc777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDIxNTA0MHw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Src:
    'https://images.unsplash.com/photo-1519419691348-3b3433c4c20e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDIxNTA0MHw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Src:
    'https://images.unsplash.com/photo-1541585452861-0375331f10bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDIxNTA0MXw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Position: 'Marketing Manager',
  author3Name: 'Ahmed Khalil',
  author4Alt: 'Image of Sarah Johnson',
  content1:
    'Read what our satisfied customers have to say about our email sending services.',
  author4Src:
    'https://images.unsplash.com/photo-1720522230316-89cb86df2899?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDIxNTA0MHw&ixlib=rb-4.0.3&q=80&w=1080',
  review1:
    'I have been using this email sending service for a while now, and I am extremely impressed with the results. The delivery rates are excellent, and the interface is user-friendly.',
  heading1: 'Our Happy Customers',
  author2Name: 'Jane Smith',
  review2:
    'Sending bulk emails has never been easier. This service has helped us reach our target audience effectively and efficiently. Highly recommended!',
  author2Alt: 'Image of Jane Smith',
  review4:
    'As a small business owner, managing email campaigns can be overwhelming. This service has simplified the process for me and helped me connect with my customers effectively.',
  review3:
    'I have tried several email sending platforms, but this one stands out for its affordability and performance. The analytics provided are detailed and insightful.',
  author3Alt: 'Image of Ahmed Khalil',
}

Testimonial.propTypes = {
  author3Position: PropTypes.string,
  author4Position: PropTypes.string,
  author1Alt: PropTypes.string,
  author1Name: PropTypes.string,
  author2Position: PropTypes.string,
  author4Name: PropTypes.string,
  author2Src: PropTypes.string,
  author1Src: PropTypes.string,
  author3Src: PropTypes.string,
  author1Position: PropTypes.string,
  author3Name: PropTypes.string,
  author4Alt: PropTypes.string,
  content1: PropTypes.string,
  author4Src: PropTypes.string,
  review1: PropTypes.string,
  heading1: PropTypes.string,
  author2Name: PropTypes.string,
  review2: PropTypes.string,
  author2Alt: PropTypes.string,
  review4: PropTypes.string,
  review3: PropTypes.string,
  author3Alt: PropTypes.string,
}

export default Testimonial
