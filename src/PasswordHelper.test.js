import React from 'react'
import { shallow } from 'enzyme'
import PasswordHelper from './PasswordHelper'

const defaultProps = {}

const factory = (props = {}) => (
  <PasswordHelper {...defaultProps} {...props} />
)

describe('<PasswordHelper />', () => {
  it('should not show ".isComplex" once it is complex', () => {
    const wrapper = shallow(factory())

    // test that it's not there initially
    expect(wrapper.find('.isComplex').length).toBe(0)

    const comp = wrapper.find('input')
    comp.simulate('change', { target: { value: 'Bo333op' } })

    // now that it is
    expect(wrapper.find('.isComplex').length).toBe(1)
  })
})
