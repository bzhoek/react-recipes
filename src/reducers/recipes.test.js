import recipes, {initial} from './recipes'

describe('recipes reducer', () => {
  const reducer = recipes

  it('returns an empty array', () => {
    expect(reducer()).toEqual(initial)
  })
})