import React from 'react'
import {shallow} from 'enzyme'
import Title from './Title'

describe('<Title />', () => {
  const title = shallow(<Title content="All your base" />)

  it('is wrapped in a h1', () => {
    expect(title).toHaveTagName('h1')
  })

  it('renders its content', () => {
    expect(title).toHaveText("All your base")
  })
})