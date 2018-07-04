import React from 'react'
import { shallow } from 'enzyme'
import RubiksCube from './RubiksCube'

const defaultProps = {
  type: 'plus yellow',
}

const factory = (props = {}) => (
  <RubiksCube {...defaultProps} {...props} />
)

describe('<RubiksCube />', () => {
  // This method is useful for testing your component in hard to achieve states, however should be used sparingly.
  //
  // We've got to do some pretty complex stuff to this component in order to get
  // it to trigger onComplete.
  it('should call "onComplete"', () => {
    const onComplete = jest.fn()
    const wrapper = shallow(factory({ onComplete }))

    const instance = wrapper.instance()
    instance.handleCornersFixed()
    instance.handleSideEdgesFixed()
    instance.handleCenterEdgesFixed()

    expect(onComplete).toHaveBeenCalled()
  })
})
