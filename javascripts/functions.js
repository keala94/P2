"use strict";
//Project 2 
//Req. 4-A

var isArmstrong = function(armNum) {
	var result =0;
	var digit=0; 
	armNum = armNum.toString();
for( var i = 0; i < armNum.length; ++i) {
		//process the current digit
		digit = parseInt(armNum[i]);

	
		result += Math.pow(digit , armNum.length);
	
	}
	if (armNum == result) {
		return true;
	}
	else { 
		return false;
	}
}

//Req. 4-B

var allArmstrongs = function() { 
	var result = "";
	
	for (var k = 1; k <= 999999; ++k){
		//test k 
		if (isArmstrong(k));
		result = result + k + ' ';
	}
        return result;
}

//Req. 4-C

var allSubstrings1 = function() {
	var result ="";

	allSubStrings1.substring(0, 1); 
}

//Req. 4-D
var allSubstrings2 = function() {
	var result = "";


}

//Req. 4-E

var maxWord = function () {
	var result = "";
}
