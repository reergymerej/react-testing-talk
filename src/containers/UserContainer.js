import React from 'react'
import { connect } from 'react-redux'
import User from '../components/User'
import { actions } from '../redux/modules/root'

class UserContainer extends React.Component {
  render() {
    const {
      user,
      onLogin,
      onLogout,
    } = this.props
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
  user: state.root.user,
})

export const mapDispatchToProps = {
  onLogin: actions.login,
  onLogout: actions.logout,
}

export { UserContainer }

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
