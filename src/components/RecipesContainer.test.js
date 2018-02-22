import React from 'react'
import {shallow} from 'enzyme'
import RecipesContainer from './RecipesContainer'
import Title from './Title'

describe('<RecipesContainer />', () => {
  const subject = shallow(<RecipesContainer recipes={[]}/>)

  it('is wrapped in class recipes', () => {
    expect(subject).toHaveClassName('recipes')
  })

  it('contains a title', () => {
    expect(subject).toContainReact(<Title content="Recipes"/>)
  })

})