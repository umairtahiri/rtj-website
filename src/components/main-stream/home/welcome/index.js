import React from 'react'
import { MDBMask, MDBView } from 'mdbreact'

const WelcomeSection = () => {
  return (
    <MDBView src={"static/images/2.jpg"}>
      <MDBMask
        overlay="purple-light"
        className="flex-center flex-column text-white text-center"
      >
        <div className="site-title">
          Welcome to <br></br> Rohani Talaba Jamaat Pakistan
        </div>
      </MDBMask>
    </MDBView>
  )
}

export default WelcomeSection
