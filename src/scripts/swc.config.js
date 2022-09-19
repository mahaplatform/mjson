import path from 'path'

export default {
  jsc: {
    baseUrl: '.',
    parser: {
      syntax: 'ecmascript',
      exportDefaultFrom: true,
      exportNamespaceFrom: true
    },
    paths: {
      '@src/*': [path.resolve('src','*')]
    },
    target: 'es5'
  },
  module: {
    type: 'commonjs'
  }
}
