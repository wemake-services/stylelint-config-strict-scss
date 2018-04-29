'use strict'

const path = require('path')
const stylelint = require('stylelint')
const config = require('../')

const fixturesDir = path.resolve(__dirname, 'fixtures', 'order')

describe('if-else tags', () => {
  describe('correct style', () => {
    let result

    beforeEach(() => {
      result = stylelint.lint({
        files: path.join(fixturesDir, 'correct.scss'),
        config
      })
    })

    it('did not error', async () => {
      const data = await result
      expect(data.errored).toBeFalsy()
    })

    it('flags no warnings', async () => {
      const data = await result
      expect(data.results[0].warnings.length).toBe(0)
    })
  })
})
