// arr=[22,33,45,62,111];

// el = arr[0];
// arr.splice(0,1);
// arr.splice(3, 0, el);

// console.log(arr);

arr1=[["a", 1, false],["b",3,false]];
arr2=[["a",1,true],["b",2]];
niz=[[],[],[]];


console.log(typeof arr2[0]);

for(let i=0;i<arr1.length;i++)
{
    for(let j=0;j<arr1[i].length;j++)
    {
        if(typeof arr1[i][j]==="number")
        {
            niz[0].push(arr1[i][j]);
        }
        else if(typeof arr1[i][j]==="string")
        {
            niz[1].push(arr1[i][j]);
        }
        else
        {
            niz[2].push(arr1[i][j]);
        }

    }
}
console.log(niz);

