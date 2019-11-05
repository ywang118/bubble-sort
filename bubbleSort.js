// a=[2,7,4,1,5,3]
//swapping the adjacent elements
// after the first pass: 2,4,1,5,3,7
////  for i -> 0 to n-2  {if (a[i]>a[i+1])}  {swap(a[i],a[i+1])}
// after second pass: 2,1,4,3,5,7
var data = [2,7,4,1,5,3];

function bubblesort(data){
  // control numbers of pass, in total it will loop over data.length-1
  for(let k=0; k<data.length-1;k++) {
    // for every pass, swap the adjacent elements if they are in wrong order, let the big number to be the last one
    for(let i = 0; i < data.length-k-1;i++){
      if (data[i]> data[i+1]){
        let temp = data[i];
        data[i]= data[i+1]
        data[i+1] = temp;
      }
    }
  }
  return data;
}
// execution time: O(n^2)

console.log(bubblesort(data));

// inprove way. swap it from both end.
function bubbleSort(data){
  var left=0,right=data.length-1, temp,i;

  while (left<right){
    //move the large number to the last one
    for(let i=0;i<right;i++){
      if(data[i]> data[i+1]){
        temp = data[i+1]
        data[i+1]=data[i]
        data[i]=temp
      }
    }
    --right;

    //move the smaller number to the left
    for(let i=right;i> left;i--) {
      if(data[i]< data[i-1]){
        temp= data[i-1];
        data[i-1]=data[i];
        data[i]=temp;
      }
    }
    ++left
  }
  return data;
}
console.log(bubbleSort(data));
