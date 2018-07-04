import reducers from './reducers'

// There are lots of different ways to structure the Redux part of your code.
// Depending on how it's done will determine what your test template looks like.
//
// Experiment until you find something simple and common.  Then use it as your
// template.  Refine it as you go.

// Here is an example of a cheap way to test reducers.  There's no pollution
// from other reducers or previous state.  There's no store setup (reducers are
// just functions, man).  It's focused only on the most important part of Redux.
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

  // If you're cool, you will use little action factories so you don't have
  // plain old objects floating around.  You can combine that factory with the
  // reducer test and kill two birds with one stone.
  xit('should handle "logout"', () => {
    //const action = actionCreators.doTheFunkyChicken()
    //expect(reducers({}, action)).toEqual({
    //})
  })
})
