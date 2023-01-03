


function selectonSort(arr){
  for(let i=0;i<arr.length-1;i++){
     for(let j=i+1;j<arr.length;j++){
          if(arr[i]>arr[j]){
              swap(i,j,arr)
          }
     }
  }
  return arr
}

function swap(a,b,arr){
     let temp=arr[a]
         arr[a]=arr[b]
         arr[b]=temp
         return arr
}
console.log(selectonSort([5,3,7,2,8,4]))
