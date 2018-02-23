import recipes from './recipes'

describe('recipes reducer', () => {
  const reducer = recipes
  const initialState = {recipes: []}

  it('returns an empty array', () => {
    expect(reducer()).toEqual(initialState)
  })
})