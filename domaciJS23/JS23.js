// function pomeri(niz, a, b)
// {
//     pomNiz=niz.slice(a, b+1);
//     console.log(pomNiz);
//     el=pomNiz.shift();
//     console.log(el);
//     pomNiz.push(el);
//     console.log(pomNiz)

//     for(let i = pomNiz.length-1; i=>0;i--)
//     {
//         const elemnet=pomNiz[i];
//         niz.splice(a,0,elemnet)
//     }
// }

// console.log(pomeri([1, 2, 3, 4, 5] , 0, 2));
// console.log(niz);




function move(arr, old_index, new_index) {
    while (old_index < 0) {
        old_index += arr.length;
    }
    while (new_index < 0) {
        new_index += arr.length;
    }
    if (new_index >= arr.length) {
        var k = new_index - arr.length;
        while ((k--) + 1) {
            arr.push(undefined);
        }
    }
     arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);  
   return arr;
}

console.log(move([10, 20, 30, 40, 50], 0, 2));

console.log(move([10, 20, 30, 40, 50], -1, -2));