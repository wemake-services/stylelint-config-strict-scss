/**
 * Copyright (c) 2018-present, wemake.services
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict'

module.exports = {
  extends: [
    'stylelint-config-standard'
  ],
  plugins: [
    'stylelint-scss',
    'stylelint-order'
  ],
  rules: {
    // fixing grammar
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,

    // base
    'max-nesting-depth': 3, // just google 'the-inception-rule'

    // order
    'order/order': [
      [
        'custom-properties',
        'dollar-variables',
        {
          type: 'at-rule',
          name: 'extend'
        },
        {
          type: 'at-rule',
          name: 'include',
          hasBlock: false
        },
        'declarations',
        {
          'type': 'at-rule',
          'name': 'include',
          'hasBlock': true
        },
        'rules',
        'at-rules'
      ]
    ],

    // url() function
    'function-url-no-scheme-relative': true, // use explicit https
    'function-url-quotes': 'always',

    // vendor prefixes are forbidden, use autoprefixer
    'at-rule-no-vendor-prefix': true,
    'media-feature-name-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,

    // comments
    'scss/double-slash-comment-whitespace-inside': 'always',

    // scss declarations
    'scss/declaration-nested-properties': 'never',

    // scss variables
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/dollar-variable-colon-space-after': 'always',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-pattern': '^[_]?[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
    'scss/no-duplicate-dollar-variables': true,

    // scss placeholders
    'scss/percent-placeholder-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',

    // scss mixins
    'scss/at-mixin-named-arguments': 'always',
    'scss/at-mixin-parentheses-space-before': 'always',
    'scss/at-mixin-argumentless-call-parentheses': 'always',
    'scss/at-mixin-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',

    // scss functions
    'scss/at-function-named-arguments': 'always',
    'scss/at-function-parentheses-space-before': 'always',
    'scss/at-function-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',

    // scss operators
    'scss/operator-no-newline-before': true,
    'scss/operator-no-newline-after': true,
    'scss/operator-no-unspaced': true,

    // scss selectors
    'selector-attribute-quotes': 'always',
    'scss/selector-no-redundant-nesting-selector': true,

    // scss imports
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension-blacklist': ['scss'],

    // scss if-else
    'at-rule-empty-line-before': [
      'always', {
        ignoreAtRules: ['else'],
        except: [
          'blockless-after-same-name-blockless',
          'first-nested'
        ],
        ignore: ['after-comment']
      }
    ],
    'block-closing-brace-newline-after': [
      'always', { ignoreAtRules: ['if', 'else'] }
    ],

    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-else-closing-brace-space-after': 'always-intermediate',
    'scss/at-else-empty-line-before': 'never',
    'scss/at-else-if-parentheses-space-before': 'always',
    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-if-closing-brace-space-after': 'always-intermediate'
  }
}
