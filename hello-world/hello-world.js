var greet = 'Hello, ';
var name = '' || 'World!'

function HelloWorld() {
}

HelloWorld.prototype.hello = function() {
  return greet + name;
}

module.exports = HelloWorld;
