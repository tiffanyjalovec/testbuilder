// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

var prefix6 = cardNumber.slice(0, 6);
var prefix5 = cardNumber.slice(0, 5);
var prefix4 = cardNumber.slice(0, 4);
var prefix3 = cardNumber.slice(0, 3);
var prefix2 = cardNumber.slice(0, 2);

if ((cardNumber[0]==='3' && cardNumber[1]==='8' || cardNumber[1]==='9') && cardNumber.length === 14){
	return "Diner's Club";
}
if((cardNumber[0]==='3' && cardNumber[1]==='4' || cardNumber[1]==='7') && cardNumber.length === 15){
	return "American Express";
  // Once you've read this, go ahead and try to implement this function, then return to the console.
}

if((cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19) && (prefix4 === '4903' || prefix4 === '4905' || prefix4 === '4911' || prefix4 === '4936' || prefix6 === '564182' || prefix6 === '633110' || prefix4 === '6333' || prefix4 === '6759')){
	return "Switch";
}

if((cardNumber[0]==='4') && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)){
	return "Visa";
}
if((cardNumber[0]==='5') && (cardNumber[1]==='1' || cardNumber[1]==='2' || cardNumber[1]==='3' || cardNumber[1]==='4' || cardNumber[1]==='5') && (cardNumber.length === 16)){
	return "MasterCard";
}

if ((cardNumber.length === 16 || cardNumber.length===19)&& (prefix4 === '6011' || prefix2 === '65' || (parseInt(prefix3) <= 649 && parseInt(prefix3) >= 644))){
	return "Discover";
}

if ((cardNumber.length >= 12 && cardNumber.length <= 19) && (prefix4 === '5018' || prefix4 === '5020' || prefix4 === '5038' || prefix4 === '6304')){
	return "Maestro";
}

if ((cardNumber.length >= 16 && cardNumber.length <=19) && ((parseInt(prefix6) <= 622925 && parseInt(prefix6) >= 622126) || (parseInt(prefix4) >= 6282 && parseInt(prefix4) <= 6288) || (parseInt(prefix3) >= 624 && parseInt(prefix3) <= 626))){
	return "China UnionPay";
}

};


