'use strict'

const path = require('path')
const stylelint = require('stylelint')
const config = require('../')

const fixturesDir = path.resolve(__dirname, 'fixtures', 'if-else')

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
    }, 10000)

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
      expect(data.results[0].warnings.length).toBe(10)
    })

    it('flags correct rule warnings', async () => {
      const rules = [
        'at-rule-empty-line-before',
        'at-rule-name-space-after',
        'block-opening-brace-space-before',
        'scss/at-else-if-parentheses-space-before',
        'scss/at-if-closing-brace-space-after',
        'scss/at-else-closing-brace-newline-after',
        'scss/at-else-closing-brace-space-after',
        'block-opening-brace-space-before',
        'block-opening-brace-space-after',
        'block-closing-brace-space-before'
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
