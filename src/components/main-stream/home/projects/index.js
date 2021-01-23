import React from 'react'
import Tile from './tile'
import './styles.scss'

const Projects = props => {
  const projectList = [
    {
      id: 1,
      title: 'Career Counselling',
      description: 'This a dummy post',
      imgUrl: '/static/images/career.jpg',
      url: '#',
      icon: 'fa fa-signal',
      color: '#ff9800',
    },
    {
      id: 2,
      title: 'Assesment Tests',
      description: 'This a dummy post',
      imgUrl: '/static/images/test.jpg',
      url: '#',
      icon: 'fa fa-graduation-cap',
      color: '#4285f4',
    },
    {
      id: 3,
      title: 'Blood Donation Camps',
      description: 'This a dummy post',
      imgUrl: '/static/images/blood.jpg',
      url: '#',
      icon: 'fa fa-flask',
      color: '#a6c',
    },
    {
      id: 4,
      title: 'Medical Camps',
      description: 'This a dummy post',
      imgUrl: '/static/images/health.jpg',
      url: '#',
      icon: 'fa fa-leaf',
      color: '#00c851',
    },
    {
      id: 5,
      title: 'Educational Seminars',
      description: 'This a dummy post',
      imgUrl: '/static/images/seminar.jpg',
      url: '#',
      icon: 'fa fa-heartbeat',
      color: '#fa4444',
    },
    {
      id: 6,
      title: 'Social Welfare Activities',
      description: 'This a dummy post',
      imgUrl: '/static/images/help.jpg',
      url: '#',
      icon: 'fa fa-heartbeat',
      color: '#fa4444',
    },
    {
      id: 7,
      title: 'Plantation',
      description: 'This a dummy post',
      imgUrl: '/static/images/plantation.jpg',
      url: '#',
      icon: 'fa fa-heartbeat',
      color: '#fa4444',
    },
  ]
  return (
    <div className="projects-container">
      <h1>Our Projects</h1>
      <div className="projects">
        {projectList.map(agenda => (
          <Tile
            key={agenda.id}
            title={agenda.title}
            description={agenda.description}
            img={agenda.imgUrl}
            targetUrl={agenda.url}
            icon={agenda.icon}
            color={agenda.color}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
