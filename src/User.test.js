import React from 'react'
import { shallow } from 'enzyme'
import User from './User'

const defaultProps = {}

const factory = (props = {}) => (
  <User {...defaultProps} {...props} />
)

describe('<User />', () => {
  describe('user prop', () => {
    // We could separate these, but it's OK to combine them for now.
    // If something fails, it may not be immediately obvious, but this is much
    // easier to write.  The assertions are simple, which is important.
    it('should toggle login/user', () => {
      const wrapper = shallow(factory())
      expect(wrapper.find('.login').length).toBe(1)
      expect(wrapper.find('.name').length).toBe(0)
      expect(wrapper.find('.logout').length).toBe(0)
      wrapper.setProps({ user: 'Your Mom' })
      expect(wrapper.find('.login').length).toBe(0)
      expect(wrapper.find('.name').length).toBe(1)
      expect(wrapper.find('.logout').length).toBe(1)
    })
  })

  it('should call "onLogin"', () => {
    const onLogin = jest.fn()
    const wrapper = shallow(factory({ onLogin }))
    wrapper.find('.login').simulate('click')
    expect(onLogin).toHaveBeenCalled()
  })

  // Oh, good!  I can copy/paste that sucker above.  So easy.
  // Keeping a pattern in the tests makes them easy to understand, modify, and
  // reuse (aka copy/paste).
  it('should call "onLogout"', () => {
    const onLogout = jest.fn()
    const wrapper = shallow(factory({ user: 'Mr. T', onLogout }))
    wrapper.find('.logout').simulate('click')
    expect(onLogout).toHaveBeenCalled()
  })
})
