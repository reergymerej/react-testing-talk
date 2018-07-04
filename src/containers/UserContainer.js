import React from 'react'
import { connect } from 'react-redux'
import User from '../components/User'

class UserContainer extends React.Component {
  render() {
    const { user, onLogin, onLogout } = this.props
    return (
      <User
        user={user}
        onLogin={onLogin}
        onLogout={onLogout}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
})

const mapDispatchToProps = {
  onLogin() {
    return {
      type: 'login',
    }
  },

  onLogout() {
    return {
      type: 'logout',
    }
  },
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
