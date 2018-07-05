import React from 'react'
import { shallow } from 'enzyme'
import TickleMe from './TickleMe'

const defaultProps = {
  pushState() {},
}

const factory = (props = {}) => (
  <TickleMe {...defaultProps} {...props} />
)

describe('<TickleMe />', () => {
  it('should render', () => {
    shallow(factory())
  })

  // confusing props
  xit('should call "sniffFlower" with the weasel\'s favorite', () => {
    const sniffFlower = jest.fn()
    const weasel = { favorite: 'plumeria' }
    const wrapper = shallow(factory({
      isHairCombed: true,
      pilotId: '123abc',
      sniffFlower,
      weasel,
    }))

    // How the crap do we get to this part of the code?  How can I test just
    // this one bug without getting sucked into this swamp of sadness?
    // Using just the component's user interface, as is best practice, we have
    // to:
    // 1. Figure out the crazy inputs needed to get renderMeditateOption.
    // 2. Figure out how to access weirdly embedded button
    // 3. Navigate another set of cryptic props and if...thens.

    // And don't forget that when that crazy logic you navigated changes, there's
    // a pretty good chance your test will break and you'll have to do it again.
    //
    // Alternatively, you could cheat using `instance` and just jump to the part
    // you're interested in.  Again, this is bad.  We're only doing this because
    // this component sucks.
    wrapper.instance().join()

    expect(sniffFlower).toHaveBeenCalledWith(weasel.favorite)
  })
})
