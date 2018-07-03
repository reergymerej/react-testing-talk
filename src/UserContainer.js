import React from 'react'
import { connect } from 'react-redux'

const User = () => <div />

class UserContainer extends React.Component {
  render() {
    const { user } = this.props
    return (
      <div>
        <User
          user={user}
        />
      </div>
    )
  }
}

export default connect()(UserContainer)
