import React, { Component } from 'react'
import './App.css'
import PasswordHelper from './PasswordHelper'
import UserContainer from './UserContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            React Testing
          </h1>
          <div className="user">
            <UserContainer />
          </div>
        </header>
        <p className="App-intro">
          Testing can be easy.
        </p>
        <PasswordHelper />

      </div>
    )
  }
}

export default App
