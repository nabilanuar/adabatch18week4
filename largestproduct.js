function adjacentElementsProducts(inputArray){
  
  var largestProduct = inputArray[0] * inputArray[1];

  for (var i = 0; i < inputArray.length-1; i++){        //inputArray.length-1..must have .length-1 to calculate till the end of array
      if(inputArray[i]*inputArray[i+1] > largestProduct){
       largestProduct = inputArray[i] * inputArray[i+1];
       }
  }
 
 return largestProduct;
}

console.log(adjacentElementsProducts([7,-3,-2,-5,20,3])); //must put answer in [] for the function to know it's an array
