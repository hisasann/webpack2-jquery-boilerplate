if (process.env.NODE_ENV === 'production') {
  module.exports = require('./env.production');
} else {
  module.exports = require('./env.development');
}