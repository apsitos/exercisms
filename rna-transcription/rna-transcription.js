function DnaTranscriber() {}

DnaTranscriber.prototype.toRna = function(dna) {
  var transcription = '';
  for (i = 0; i < dna.length; i++){
    if (dna.charAt(i) === 'C'){
      transcription += 'G';
    } else if (dna.charAt(i) === 'G') {
      transcription += 'C';
    } else if (dna.charAt(i) === 'A') {
      transcription += 'U';
    } else if (dna.charAt(i) === 'T') {
      transcription += 'A';
    }
  } return transcription;
}

module.exports = DnaTranscriber;
