import React from 'react'
import { shallow } from 'enzyme'
import RubiksCube from './RubiksCube'

const defaultProps = {}

const factory = (props = {}) => (
  <RubiksCube {...defaultProps} {...props} />
)

describe('<RubiksCube />', () => {
  it('should render', () => {
    shallow(factory())
  })
})
