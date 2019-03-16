Date.prototype.convertFormat = function(format, seperator) {
    var formatArray = {
        "dd" : this.getDate(),
        "mm" : this.getMonth()+1,
        "yyyy" : this.getFullYear(),
        "DD" : this.getDate(),
        "MM" : this.getMonth()+1,
        "YYYY" : this.getFullYear()
    }
    var formats = format.split(seperator);
    console.log(formatArray[formats[0]] + seperator + formatArray[formats[1]] + seperator + formatArray[formats[2]]);
}