function isSameType(value1, value2) {
  //your js code here
	if(typeof value1 == typeof value2){
		return true;
	}
	else if(typeof value1 != typeof value){
		return false;
	}
	else if(typeof value1==NaN || typeof value2==NaN){
		return false;
	}
	else{
		return true;
	}
}

// do not change the code below.dd
 let value1 = prompt("Enter Start of the Range.");
 let value2 = prompt("Enter End Of the Range.");

alert(isSameType(value1, value2));
