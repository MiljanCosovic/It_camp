var niz=[2, "asdf",4,"bdf",3234];
var rez=[];
for(i=0;i<niz.length;i++)
{
    if(typeof niz[i]==="number")
    {
        rez.unshift(niz[i]);
    }
    else
    {
        rez.push(niz[i]);
    }
}
console.log(rez);
