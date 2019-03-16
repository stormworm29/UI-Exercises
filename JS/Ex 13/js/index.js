/**
 * Method: Calculator
 * Description: Addition and Subtraction operations using Closure Functions
 */

var calculator = (function(){
    var results = "";
    var printOut = function (result, resultString, operation) {
        if(results == ""){
            resultString = "NILL";
        }
        switch(operation)
        {
            case 1: console.log("Sum: " + result + " Previous Answers: " + resultString);
                    break;
            case 2: console.log("Diff: " + result + " Previous Answers: " + resultString);
                    break;
        }
        if(resultString == "NILL") {
            resultString = "";
        }
    };
    function addition(number1, number2) {
        var sum = number1 + number2;
        printOut(sum, results, 1);
        if(results == "") {
            results += sum.toString();
        }
        else {
            results += ',';
            results += sum.toString();
        }
    }
    function subtraction(number1, number2) {
        var sub = number1 - number2;
        printOut(sub, results, 2);
        if(results == "") {
            results += sub.toString();
        }
        else {
            results += ',';
            results += sub.toString();
        }
    }
    return {
        add: addition,
        sub: subtraction
    };
})();