const testContext = require.context('./src', true, /__tests/);
testContext.keys().forEach(testContext);

// Want ceverage on files with no tests
const srcContext = require.context('./src', true, /^(?:(?!__tests).)+$/);
srcContext.keys().forEach(srcContext);
