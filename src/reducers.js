const initialState = {}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        user: 'Mr. Magoo',
      }

    case 'logout':
      return {
        ...state,
        user: null,
      }

    default:
      return state
  }
}

export default reducers
