const LOGIN = 'login'
const LOGOUT = 'logout'
const GET_FUNKY = 'getFunky'

export const actions = {
  login: () => ({ type: LOGIN }),
  logout: () => ({ type: LOGOUT }),
  getFunky: (music) => ({ type: GET_FUNKY, music }),
}

const initialState = {}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { user: 'Mr. Magoo' }

    case LOGOUT:
      return { user: null }

    default:
      return state
  }
}
