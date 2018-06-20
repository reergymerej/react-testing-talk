import React from 'react'

const User = (props) => {
  const { user, onLogin, onLogout } = props
  return (
    <div>
      { !user
        && <button className="login" onClick={onLogin}>Login</button>
      }
      { user
        && <div className="name">{user}</div>
      }
      { user
        && <button className="logout" onClick={onLogout}>Logout</button>
      }
    </div>
  )
}

export default User
