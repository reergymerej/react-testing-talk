import React from 'react'
import { shallow } from 'enzyme'
import UserContainer from './UserContainer'

const defaultProps = {}

const factory = (props = {}) => (
  // We're cutting out all the Redux/react-redux stuff.  It gets complicated
  // really fast, significantly slows down tests, and doesn't add much value.
  <UserContainer.WrappedComponent {...defaultProps} {...props} />
)

describe('<UserContainer />', () => {
  describe('<User />', () => {
    // This is kind of wiring.  Is it worth it?
    // It will be if we keep it simple.
    it('should dispatch "onLogin" after "login" is emitted', () => {
      const onLogin = jest.fn()
      const wrapper = shallow(factory({ onLogin }))
      wrapper.find('User').simulate('login')
      expect(onLogin).toHaveBeenCalled()
    })

    it('should dispatch "onLogout" after "logout" is emitted', () => {
      const onLogout = jest.fn()
      const wrapper = shallow(factory({ onLogout }))
      wrapper.find('User').simulate('logout')
      expect(onLogout).toHaveBeenCalled()
    })

    // Is it hypocritical to test wiring on containers when we've argued that
    // it's a waste to test them in components?
    // No, I don't think so.  The function of a container is essentially wiring.
    // That's what we're testing.
    // If this is too much or you don't see the difference, don't worry about
    // it.  Skip these kinds of tests if you want!
    it('should map the user', () => {
      const user = 'Princess Belle'
      const wrapper = shallow(factory({ user }))
      const comp = wrapper.find('User')
      expect(comp.prop('user')).toBe(user)
    })
  })
})
