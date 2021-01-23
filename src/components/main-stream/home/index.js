import React, { Component } from 'react'
import { MDBContainer } from 'mdbreact'
import Introduction from './introduction'
import Agendas from './agendas'
import Projects from './projects'
import LatestPosts from './latest-post'
import WelcomeSection from './welcome'
import './styles.scss'

class Home extends Component {
  render () {
    return (
      <MDBContainer className="text-center">
        <WelcomeSection/>
        <Introduction/>
        <Agendas/>
        <Projects/>
        <LatestPosts/>
      </MDBContainer>
    )
  }
}

export default Home
