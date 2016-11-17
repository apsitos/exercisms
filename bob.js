var Bob = function() {};

// order of if/elses


Bob.prototype.hey = function(statement) {
  if (parseInt(statement) && isNaN(statement)) {
    return 'Whatever.';
  } else if (statement === statement.toUpperCase()) {
    return 'Whoa, chill out!';
  } else if (statement.includes('?')) {
    return 'Sure.';
  } else {
    return 'Whatever.';
  };

}

module.exports = Bob;




// return statement.includes(integer)
// return true if it includes an integer
// split in array
// check if array includes
