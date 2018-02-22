import React from 'react'
import {shallow} from 'enzyme'
import App from './App'

describe('<App />', () => {
  const subject = shallow(<App/>)

  it('is wrapped in a div', () => {
    expect(subject).toHaveTagName('div')
  })

})