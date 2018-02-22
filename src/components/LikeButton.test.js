import React from 'react'
import {shallow} from 'enzyme'
import LikeButton from './LikeButton'

describe('<LikeButton />', () => {
  const button = shallow(<LikeButton/>)

  it('is wrapped in a like class', () => {
    expect(button).toHaveClassName('like')
  })

  it('it is not liked initially', () => {
    expect(button).toHaveState('liked', false)
  })

  it('it toggles when clicked', () => {
    button.find('button').simulate('click')
    expect(button).toHaveState('liked', true)
    button.find('button').simulate('click')
    expect(button).toHaveState('liked', false)
  })


})