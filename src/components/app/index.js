import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'

import Home from '../main-stream'

const App = () => (
  <Router>
    <Home path="/" />
  </Router>
)

export default App
