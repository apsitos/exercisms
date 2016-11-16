function Year (year) {
  this.year = year;
}

Year.prototype.isLeap = function(){
  if (this.year % 400 != 0 && this.year % 100 == 0 || this.year % 4 == 0) {
    return false;
  }  else {
    return true;
  }
}

module.exports = Year;
