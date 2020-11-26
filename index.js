const util = require('util');
const { Transform } = require('stream');

function TranformEnvironmentVariables (options) {
  Transform.call(this, options);
}
util.inherits(TranformEnvironmentVariables, Transform);

TranformEnvironmentVariables.prototype._transform = function (chunk, enc, cb) {
  const newValue = chunk.toString().replace(/process\.env[.[]['"`]?([A-z0-9_]*)['"`]?\]?/g, function (fullMatch, variable) {
    return process.env[variable] ? JSON.stringify(process.env[variable]) : undefined;
  });
  this.push(newValue);
  cb();
};

module.exports = function (file, opts) {
  return new TranformEnvironmentVariables();
};
