import React from 'react'
import { shallow } from 'enzyme'
import UserContainer from './UserContainer'

const defaultProps = {}

const factory = (props = {}) => (
  <UserContainer.WrappedComponent {...defaultProps} {...props} />
)

describe('<UserContainer />', () => {
  it('should render', () => {
    shallow(factory())
  })
})
