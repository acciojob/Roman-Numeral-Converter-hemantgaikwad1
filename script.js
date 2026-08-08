function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	let str="";
for(let key in obj){
	let roman=obj[key][0];
	let val=obj[key][1];
	while(num>=val){
		
		str+=roman;
		num=num-val;
	}

	/*
IV = 4 (instead of writing IIII)

IX = 9 (instead of VIIII)

XL = 40 (instead of XXXX)

XC = 90

CD = 400

CM = 900
	*/
if(val===1000 && num>=900){
	str+="CM";
	num-=900;
}
	if(val===500 && num>=400){
		str+="CD";
		num-=400;
	}
	if(val===100 && num>=90){
	str+="XC";
	num-=90;
}
	if(val===50 && num>=40){
		str+="XL";
		num-=40;
	}
	if(val===10 && num>=9){
	str+="IX";
	num-=9;
}
	if(val===5 && num>=4){
		str+="IV";
		num-=4;
	}
	
}
	return str;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

 console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
