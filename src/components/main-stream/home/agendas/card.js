import React from 'react'
import PropTypes from 'prop-types'

const Card = props => {
  const { title, description, img, icon, color } = props
  return (
    <div className="agenda-card">
      <div
        className="image-container"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="content-container">
          <h4 style={{ color: color }}>
            <i className={icon} aria-hidden="true"></i>
            {title}
          </h4>

          <div className="card-text">
            {description}
            <br></br>
            Prophet Hazrat Muhammad علیہ الصلوۃالسلام
          </div>
          <a href="/" className="details-btn" style={{ background: color }}>
            Read More...
          </a>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
}

export default Card
