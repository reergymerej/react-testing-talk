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
  // from Enzyme docs
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

  it('should show solved', () => {
    // If it is easy, ignore my advice, too.
    // I want to know if this thing shows the right component when it's sovled.
    // I _should_ massage it based on the components interface (ie, events
    // triggered from it's children), but I don't know what it needs.
    const wrapper = shallow(factory())
    wrapper.setState({ complete: true })
    expect(wrapper.find('.complete').length).toBe(1)
    wrapper.setState({ complete: false })
    expect(wrapper.find('.incomplete').length).toBe(1)

    // If we keep the test like this, it would pass even if both components were
    // visible all the time.  That's kinda bad.  A better test is to test the
    // inverse, too.  Use your discretion, though, as these quickly become
    // tedious busy work.
    // wrapper.setState({ complete: true })
    // expect(wrapper.find('.complete').length).toBe(1)
    // expect(wrapper.find('.incomplete').length).toBe(0)
    // wrapper.setState({ complete: false })
    // expect(wrapper.find('.complete').length).toBe(0)
    // expect(wrapper.find('.incomplete').length).toBe(1)
  })
})
