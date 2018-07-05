import React from 'react'
import { shallow } from 'enzyme'
import TickleMe from './TickleMe'

const defaultProps = {}

const factory = (props = {}) => (
  <TickleMe {...defaultProps} {...props} />
)

describe('<TickleMe />', () => {
  it('should render', () => {
    shallow(factory())
  })
})
