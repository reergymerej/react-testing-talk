import React from 'react'
import { shallow } from 'enzyme'
import UserContainer from './UserContainer'

const defaultProps = {}

const factory = (props = {}) => (
  <UserContainer.WrappedComponent {...defaultProps} {...props} />
)

describe('<UserContainer />', () => {
  describe('<User />', () => {
    // This is kind of wiring.  Is it worth it?
    // It will be if we keep it simple.
    it('should dispatch "login" after "login" is emitted', () => {
      const login = jest.fn()
      const wrapper = shallow(factory({ login }))
      wrapper.find('User').simulate('login')
      expect(login).toHaveBeenCalled()
    })
  })
})
