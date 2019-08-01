import vanilla from './main'

describe('Vanilla', () => {
  it('exports a number', () => {
    expect(vanilla).not.toBeNaN()
  })
})
