import React from 'react'
import { shallow } from 'enzyme'
import User from './User'

const defaultProps = {}

const factory = (props = {}) => (
  <User {...defaultProps} {...props} />
)

describe('<User />', () => {
  it('should call "onLogin"', () => {
    const onLogin = jest.fn()
    const wrapper = shallow(factory({ onLogin }))
    wrapper.find('.login').simulate('click')
    expect(onLogin).toHaveBeenCalled()
  })
})
