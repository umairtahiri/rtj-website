import React from 'react'
import Card from './card'
import Fade from 'react-reveal/Fade'
import './styles.scss'

const LatestPosts = props => {
  const agendaList = [
    {
      id: 1,
      title: 'Business',
      Hadees:
        'God will show compassion to thise who show kindness while buying, selling and recovering debts.',
      imgUrl: '/static/images/business.jpg',
      url: '#',
      icon: 'fa fa-signal',
      color: '#ff9800',
    },
    {
      id: 2,
      title: 'Education',
      Hadees: 'A Father gives his child nothing better than a good education.',
      imgUrl: '/static/images/education.jpg',
      url: '#',
      icon: 'fa fa-graduation-cap',
      color: '#4285f4',
    },
    {
      id: 3,
      title: 'Science & Technology',
      Hadees:
        'One who treads a path in search of knowledge has his path to Paradise made easy by ALLAH.',
      imgUrl: '/static/images/science.jpg',
      url: '#',
      icon: 'fa fa-flask',
      color: '#a6c',
    },
    {
      id: 4,
      title: 'Environment & Nature',
      Hadees:
        'If a Muslim plants a tree or sows seeds, and then a bird, or a person or an animal eats from it, it is regarded as a charitable gift (sadaqah) for him.',
      imgUrl: '/static/images/nature.jpg',
      url: '#',
      icon: 'fa fa-leaf',
      color: '#00c851',
    },
    {
      id: 5,
      title: 'Health & Fitness',
      Hadees:
        'A strong believer is better and dearer to Allah than a weak one, and both are good.',
      imgUrl: '/static/images/medical.jpg',
      url: '#',
      icon: 'fa fa-heartbeat',
      color: '#fa4444',
    },
  ]
  return (
    <div className="agendas-container">
      <h1>Five Core Agendas</h1>
      <Fade top cascade>
        <div className="agendas">
          {agendaList.map(agenda => (
            <div key={agenda.id}>
              <Card
                title={agenda.title}
                description={agenda.Hadees}
                img={agenda.imgUrl}
                targetUrl={agenda.url}
                icon={agenda.icon}
                color={agenda.color}
              />
            </div>
          ))}
        </div>
      </Fade>
    </div>
  )
}

export default LatestPosts
