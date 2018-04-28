import React, { Component } from 'react'
import './App.css'
import './Components/NavBar'
import NavBar from './Components/NavBar'
import Features from './Components/Features'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'

class App extends Component {
  render () {
    return (
      <div className="App">
        <NavBar />

        <header className="App-header">
          <div className="vmbot-logo" alt="logo" />
          <h1 className="App-title">Run JavaScript in your Discord channel.</h1>
          <p className="App-intro">
            vmbot is an open source, self-hosted Discord bot, designed to run
            JavaScript in your own channels.
          </p>
        </header>
        <Features className="feature-box" />
        <header className="App-header-2">
          <h1 className="App-title">See vmbot in action</h1>
          <div className="video-showcase">
            <video
              className="video-showcase"
              loop={true}
              muted={true}
              autoPlay={true}
              width={960}
              height={480}
              maxWidth={'100%'}
              poster="img/videoframe.jpg"
            >
              <source src="static/showcase.mp4" type="video/mp4" />
            </video>
          </div>
        </header>
        <AppBar className="footer" position="static" color="default">
          <Toolbar>
            <p>Created in {new Date().getFullYear()} by enlyth</p>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default App
