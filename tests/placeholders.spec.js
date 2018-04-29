'use strict'

const path = require('path')
const stylelint = require('stylelint')
const config = require('../')

const fixturesDir = path.resolve(__dirname, 'fixtures', 'placeholders')

describe('if-else tags', () => {
  describe('correct style', () => {
    let result

    beforeEach(() => {
      result = stylelint.lint({
        files: path.join(fixturesDir, 'correct.scss'),
        config
      })
    })

    it('did not error', () => {
      const data = await result
      expect(data.errored).toBeFalsy()
    }, 10000)

    it('flags no warnings', () => {
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

    it('did error', () => {
      const data = await result
      expect(data.errored).toBeTruthy()
    })

    it('flags correct number of warnings', () => {
      const data = await result
      expect(data.results[0].warnings.length).toBe(1)
    })

    it('flags correct rule warnings', () => {
      const rules = [
        'scss/percent-placeholder-pattern'
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
