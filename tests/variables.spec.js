'use strict'

const path = require('path')
const stylelint = require('stylelint')
const config = require('../')

const fixturesDir = path.resolve(__dirname, 'fixtures', 'variables')

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

  describe('incorrect style', () => {
    let result

    beforeEach(() => {
      result = stylelint.lint({
        files: path.join(fixturesDir, 'incorrect.scss'),
        config
      })
    })

    it('did error', async () => {
      const data = await result
      expect(data.errored).toBeTruthy()
    })

    it('flags correct number of warnings', async () => {
      const data = await result
      expect(data.results[0].warnings.length).toBe(5)
    })

    it('flags correct rule warnings', async () => {
      const rules = [
        'scss/dollar-variable-colon-space-after',
        'scss/no-duplicate-dollar-variables',
        'scss/dollar-variable-colon-space-before',
        'scss/dollar-variable-pattern',
        'scss/dollar-variable-no-missing-interpolation'
      ]

      const data = await result
      const recieved = []

      for (const warning of data.results[0].warnings) {
        recieved.push(warning.rule)
      }

      for (const rule of rules) {
        expect(recieved).toContain(rule)
      }
    })
  })
})
