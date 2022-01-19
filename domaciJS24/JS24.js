arr1=[["a", 1, false],["b",3,false]];
arr2=[["a",1,true],["b",2]];
niz=[[],[],[]];

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