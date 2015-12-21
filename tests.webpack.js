const context = require.context('./src', true, /(__tests)*\.js$/);
context.keys().forEach(context);
