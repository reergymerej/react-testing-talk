import reducers from './reducers'

describe('reducers', () => {
  it('should handle "login"', () => {
    expect(reducers({}, { type: 'login' })).toEqual({
      user: 'Mr. Magoo',
    })
  })

  it('should handle "logout"', () => {
    expect(reducers({}, { type: 'logout' })).toEqual({
      user: null,
    })
  })
})
