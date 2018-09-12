module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  extends: 'eslint:recommended',
  // required to lint *.wpy files
  plugins: [
    'wpy'
  ],
  settings: {
    'html/html-extensions': ['.html', '.wpy']
  },
  rules: {
    indent: [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    quotes: [
      "error",
      "single"
    ],
    semi: [
      "error",
      "always"
    ],
    "new-cap": [
      "error",
      {
        capIsNewExceptions: [],
        properties: false
      }
    ],
    "no-undef": [
      2
    ],
    "no-param-reassign": [
      "error",
      {
        props: false
      }
    ],
    "max-len": [
      "error",
      180,
      {
        ignoreUrls: true,
        ignoreComments: true,
        ignorePattern: "^\\s*var\\s.+=\\s*require\\s*\\(/"
      }
    ],
    "no-mixed-spaces-and-tabs": [
      0
    ],
    "no-unused-vars": [
      "error",
      {
        args: "none"
      }
    ],
    camelcase: [
      "warn"
    ],
    "no-console": [
      "warn"
    ],
    "no-constant-condition": [
      "off"
    ],
    "no-underscore-dangle": [
      "off"
    ]
  },
  globals: {
    wx: false,
    __dirname:false,
    require: false,
    module:false,
    process:false,
    Promise: false
  }
};

