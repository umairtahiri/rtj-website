import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import TopBar from './top-bar'
import Home from './home'
import AgendasPage from './agenda-page'
import Footer from './footer'
import './styles.scss'

class RTJMainScreen extends Component {
  render () {
    return (
      <div className="main-container">
        <TopBar />
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/rtj-agendas" exact component={AgendasPage} />
          </Switch>
        </div>
        <Footer />
      </div>
    )
  }
}

export default RTJMainScreen
