const testsContext = require.context('./specs', true, /\.spec$/)
testsContext.key().forEach(testsContext)
