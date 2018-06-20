import React, { Component } from 'react'
import './App.css'
import UserContainer from '../containers/UserContainer'
import RubiksCube from './RubiksCube'

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
        <RubiksCube />
      </div>
    )
  }
}

export default App
