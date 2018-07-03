import React from 'react'
import { connect } from 'react-redux'
import User from './User'

class UserContainer extends React.Component {
  handleLogin = () => {
    this.props.login()
  }

  render() {
    const { user } = this.props
    return (
      <div>
        <User
          user={user}
          onLogin={this.handleLogin}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
})

const mapDispatchToProps = {
  login() {
    return {
      type: 'login',
    }
  },
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
