arr=[22,33,45,62,111];

el = arr[0];
arr.splice(0,1);
arr.splice(3, 0, el);

console.log(arr);