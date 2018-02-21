import React from 'react'
import {shallow} from 'enzyme'
import App from './App'
import Title from './components/Title'

describe('<App />', () => {
  const app = shallow(<App/>)
  const title = <Title content="Recipes"/>

  it('is wrapped in a div', () => {
    expect(app).toHaveTagName('div')
  })

  it('contains a title', () => {
    expect(app).toContainReact(title)
  })
})