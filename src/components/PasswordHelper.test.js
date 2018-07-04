import React from 'react'
import { shallow } from 'enzyme'
import PasswordHelper from './PasswordHelper'

jest.mock('../logic')

const defaultProps = {}

const factory = (props = {}) => (
  <PasswordHelper {...defaultProps} {...props} />
)

describe('<PasswordHelper />', () => {
  it('should not show ".isComplex" once it is complex', () => {
    // Instead of leaking the "logic" into this component test, just test the
    // effects by mocking away the other module.
    require('../logic').isComplex
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(true)

    const wrapper = shallow(factory())

    // test that it's not there initially
    expect(wrapper.find('.isComplex').length).toBe(0)

    const comp = wrapper.find('input')
    comp.simulate('change', { target: { value: 'x' } })

    // now that it is
    expect(wrapper.find('.isComplex').length).toBe(1)
  })
})
