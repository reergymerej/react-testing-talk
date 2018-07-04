import React from 'react'
import * as logic from '../logic'

class PasswordHelper extends React.Component {
  state = {
    value: '',
  }

  handleInputChange = (event) => {
    this.setState({ value: event.target.value })
  }

  render() {
    const isComplex = logic.isComplex(this.state.value)
    return (
      <div>
        <input onChange={this.handleInputChange} />
        { isComplex &&
          <div className="isComplex">
            That looks OK.
          </div>
        }
      </div>
    )
  }
}

export default PasswordHelper
