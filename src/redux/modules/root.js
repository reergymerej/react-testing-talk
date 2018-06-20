const LOGIN = 'login'
const LOGOUT = 'logout'

export const actions = {
  login: () => ({ type: LOGIN }),
  logout: () => ({ type: LOGOUT }),
}

const initialState = {}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { user: 'Uncle Bob' }

    case LOGOUT:
      return { user: null }

    default:
      return state
  }
}
