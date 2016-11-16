var Hamming = function() {
}

Hamming.prototype.compute = function(strandA, strandB) {
  if (strandA.length !== strandB.length) {
    throw new Error('DNA strands must be of equal length.');
  }   
  var total = 0
  for (i = 0; i < strandA.length; i++) {
    if (strandA[i] !== strandB[i]) {
      ++total;
    };
  }; return total;
}
module.exports = Hamming;
