import React from 'react'

const isSolved = () => {
  // You didn't really think I'd fill this in did you?
  // Send me a PR.  ;)
  return false
}

class RubiksCube extends React.Component {
  state = {
    squares: [],
    corners: false,
    sideEdges: false,
    centerEdges: false,
    complete: false,
  }

  isSolved = () => {
    const { corners, sideEdges, centerEdges } = this.state
    return  (corners && sideEdges && centerEdges)
    || isSolved(this.squares)
  }

  handleCornersFixed = () => {
    this.setState({ corners: true })
    if (this.isSolved()) {
      this.props.onComplete()
    }
  }

  handleSideEdgesFixed = () => {
    this.setState({ sideEdges: true })
    if (this.isSolved()) {
      this.props.onComplete()
    }
  }

  handleCenterEdgesFixed = () => {
    this.setState({ centerEdges: true })
    if (this.isSolved()) {
      this.props.onComplete()
    }
  }

  render() {
    const { complete } = this.state
    const completeClassName = complete ? 'complete' : 'incomplete'
    return (
      <div className={`RubiksCube ${completeClassName}`}>
        <button onClick={this.handleCornersFixed}>Solve Corners</button>
        <button onClick={this.handleSideEdgesFixed}>Solve Edges</button>
        <button onClick={this.handleCenterEdgesFixed}>Solve Middle</button>
      </div>
    )
  }
}

export default RubiksCube
