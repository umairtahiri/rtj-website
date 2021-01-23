import React from 'react'
import PropTypes from 'prop-types'

const Tile = (props) => {
  const { title, img } = props
  return (
    <div className="projects-tile-main-container">
      <div className="img-container">
        <img src={img} alt="img" />
      </div>
      <div className="details-container">
        <div className="project-title">{title}</div>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        of Lorem Ipsum
      </div>
    </div>
  )
}
Tile.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
}

export default Tile
