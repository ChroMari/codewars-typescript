interface String {    // Necessary, keep it here.
  digit(): boolean;
}

String.prototype.digit = function(): boolean { 
  if (this === '' || this === ' ' || this.length > 1) {
    return false;
  }
  
  if (Number(this) >= 0 && Number(this) < 10) {
    return true;
  }
    
  return false;
};

/*
String.prototype.digit = function(): boolean {
  return /^\d$/.test(this.valueOf());
};
*/