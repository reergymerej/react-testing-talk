import { reducer, actions } from './'

// There are lots of different ways to structure the Redux part of your code.
// Depending on how it's done will determine what your test template looks like.
//
// Experiment until you find something simple and common.  Then use it as your
// template.  Refine it as you go.

// Here is an example of a cheap way to test reducers and little action
// creators.  There's no pollution from other reducers or previous state.
// There's no store setup (reducers are just functions, man).  It's focused only
// on the most important parts of Redux.  Making actions and alter state based
// on them.
describe('actions/reducer', () => {
  it('should handle LOGIN', () => {
    const action = actions.login()
    expect(reducer({}, action)).toEqual({
      user: 'Mr. Magoo',
    })
  })

  it('should handle LOGOUT', () => {
    const action = actions.logout()
    expect(reducer({}, action)).toEqual({
      user: null,
    })
  })

  // Notice how this pattern makes it really easy to copy/paste/tweak and get a
  // new, useful test.
  // Just change how you make the action and the expected state diff.

  // it('should handle GET_FUNKY', () => {
  //   const action = actions.getFunky()
  //   expect(reducer({}, action)).toEqual({
  //     funkiness: true,
  //   })
  // })

  //  Try and keep your tests generic so you can copy pasta them and they'll
  //  still make sense.  Building a toolbox of test patterns is a great way to
  //  make creating new tests very cheap.
})

// If you get a little test crazy, you may start testing initial state.  I've
// found it's mostly a waste of time.  If you test all your reducers and check
// specifically for what they change, you cover just about all of the variables.
