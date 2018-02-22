import React from 'react'
import {shallow} from 'enzyme'
import sinon from 'sinon'
import LikeButton from './LikeButton'

describe('<LikeButton />', () => {
  const toggleLike = sinon.spy()
  const button = shallow(<LikeButton liked={false} onChange={toggleLike}/>)

  it('is wrapped in a like class', () => {
    expect(button).toHaveClassName('like')
  })

  it('calls on change', () => {
    button.find('button').simulate('click')
    expect(toggleLike.callCount).toBe(1)
  })

})