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

var num;
var array = [];
var result = "";
var str = "";

var allArmstrongs = function() {
	for (var i = 1; i < 100000; ++i){

	num = String(i);
	
	for (var j = 0 ; j < num.length; ++j) {
		var arm = Math.pow(num[j], num.length);
		array.push(arm);
	
	};
	var all = 0;
	for (var k = 0; k < array.length; ++k) {
		all += array[k];

	};

	if(all == num) {
		result += num +", ";
		array.length = 0;

	}
		else {
	
			array.length = 0;}
}


	rseult = result.substring(0, result.length - 2);

		return(result);
	result = "";
}



//Req. 4-C

var result;
var allSubstrings1 = function(s) {
	s = String(s);
	result = "";
	for (var i = 0; i < s.length; ++i) {
        for (var k = i + 1; k <= s.length; ++k) {
           result += s.substring(i,k) + ",";
        }
        
    }

	return(result);
}

// Req. 4-D

var result;
var array = [];
var allSubstrings2 = function(s) {
	s = String(s);
	
	for (var i = 0; i < s.length; ++i) {
        for (var j = i + 1; j <= s.length; ++j) {
           result = ""
           result = s.substring(i,j);
           array.push(result)
        }
        
    }
	return(array);
}


//Req. 4-E

var result;
var maxWord = function(s) {
	s = String(s);
	result = s.split(" ");
	var max = 0;
	var word = "";
	for (var i = 0; i < result.length; i++) {
        if (max < result[i].length) {
            max = result[i].length;
            word = result[i];
        }
    }
return(word);
}


