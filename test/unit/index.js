const testsContext = require.context('./specs', true, /\.spec$/)
console.log(testsContext)
testsContext.key().forEach(testsContext)
