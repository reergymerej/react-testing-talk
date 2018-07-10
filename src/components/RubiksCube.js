import React from 'react'

const isSolved = (squares) => {
  // I'll gladly review PRs for this.
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
    this.setState({ corners: true }, () => {
      if (this.isSolved(this.squares)) {
        this.setState({ complete: true })
        this.props.onComplete()
      }
    })
  }

  handleSideEdgesFixed = () => {
    this.setState({ sideEdges: true }, () => {
      if (this.isSolved(this.squares)) {
        this.setState({ complete: true })
        this.props.onComplete()
      }
    })
  }

  handleCenterEdgesFixed = () => {
    this.setState({ centerEdges: true }, () => {
      if (this.isSolved(this.squares)) {
        this.setState({ complete: true })
        this.props.onComplete()
      }
    })
  }

  handleScrambleClick = () => {
    this.setState({
      corners: false,
      sideEdges: false,
      centerEdges: false,
      complete: false,
    })
  }

  render() {
    const { complete } = this.state
    const completeClassName = complete ? 'complete' : 'incomplete'
    return (
      <div className={`RubiksCube ${completeClassName}`}>
        <div>
          <button onClick={this.handleScrambleClick}>Scramble</button>
        </div>
        <div>
          <button onClick={this.handleCornersFixed}>Solve Corners</button>
          <button onClick={this.handleSideEdgesFixed}>Solve Edges</button>
          <button onClick={this.handleCenterEdgesFixed}>Solve Middle</button>
        </div>
      </div>
    )
  }
}

RubiksCube.defaultProps = {
  onComplete() {},
}

export default RubiksCube
