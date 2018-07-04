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
    return (
      <div className="RubiksCube">
        The cube is { complete ? 'complete' : 'all mixed up' }.
      </div>
    )
  }
}

export default RubiksCube
