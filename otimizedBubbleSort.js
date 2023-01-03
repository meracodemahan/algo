//optimized bubble sort
let optimizedBubbleSort = (arr) => {
  //Length of the array
  let n = arr.length;
  
  //Flag to check if swap 
  //is performed in inner loop
  let swapped = false;

  for(let i = 0; i < n - 1; i++){
    for(let j = 0; j <= n - i - 1; j++){
        //Swap elements
        if(arr[j] > arr[j+1]){
          [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
          //Set the flag to true if swapped
          swapped = true;
        }
    }
    
    //If not swapped then break the loop
    if(!swapped){
      break;
    }
  }
  
  return arr;
}
