var x = 1;
var y = 1;
var sumX = 0;
var sumY = 0;
var sumAll = 0;

function sumEven(){
  
  for(var i =0; i < 7; i++){

    x = x + y;
    y = x + y;

    if(x%2 == 0 && x < 1000){
      sumX = sumX + x;
    }
    if(y%2 == 0 && y < 1000){
      sumY = sumY + y;    
    }
    sumAll = sumY + sumX;
  }
  return sumAll;
}

console.log(sumEven());
