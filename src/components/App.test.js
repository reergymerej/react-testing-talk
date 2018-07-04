import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

const defaultProps = {}

const factory = (props = {}) => (
  <App {...defaultProps} {...props} />
)

describe('<App />', () => {
  it('should render', () => {
    shallow(factory())
  })
})
