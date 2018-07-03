import React from 'react'

const User = (props) => {
  const { onLogin } = props

  return (
    <div>
      <button className="login" onClick={onLogin}>Login</button>
    </div>
  )
}

export default User
