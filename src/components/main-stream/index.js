import React, { Component } from 'react'
import { Router } from '@reach/router'
import TopBar from './top-bar'
import Home from './home'
import AgendasPage from './agenda-page'
import ProjectDetails from './project-details'
import Footer from './footer'
import './styles.scss'

class RTJMainScreen extends Component {
  render () {
    return (
      <div className="main-container">
        <TopBar />
        <div>
          <Router>
            <Home path="/" />
            <ProjectDetails path="/project-details"/>
            <AgendasPage path="/rtj-agendas"/>
          </Router>
        </div>
        <Footer />
      </div>
    )
  }
}

export default RTJMainScreen
