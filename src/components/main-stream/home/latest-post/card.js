import React from 'react'
import PropTypes from 'prop-types'

const Card = props => {
  const { title, description, img } = props
  return (
    <div className="card">
      <div className="view overlay">
        <img className="card-img-top" src={img} alt="Card cap" />
        <a href="#!">
          <div className="mask rgba-white-slight"></div>
        </a>
      </div>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">
          Read More...
        </a>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
}

export default Card
