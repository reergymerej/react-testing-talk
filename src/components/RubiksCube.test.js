import React from 'react'
import { shallow } from 'enzyme'
import RubiksCube from './RubiksCube'

const defaultProps = {}

const factory = (props = {}) => (
  <RubiksCube {...defaultProps} {...props} />
)

describe('<RubiksCube />', () => {
  it('should show solved', () => {
    const wrapper = shallow(factory())

    expect(wrapper.find('.incomplete').length).toBe(1)

    // solve the cube
    wrapper.setState({ complete: true })

    expect(wrapper.find('.complete').length).toBe(1)
  })

  it('should call "onComplete"', () => {
    const onComplete = jest.fn()
    const wrapper = shallow(factory({ onComplete }))

    // solve the cube

    const instance = wrapper.instance()
    instance.handleCornersFixed()
    instance.handleSideEdgesFixed()
    instance.handleCenterEdgesFixed()

    expect(onComplete).toHaveBeenCalled()
  })
})
