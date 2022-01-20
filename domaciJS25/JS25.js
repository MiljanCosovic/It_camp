rez=[];
niz=[58,"", "asfd", true, null, false,0];

for(let i=0;i<niz.length;i++)
{
    if(Boolean(niz[i]))
    {
        rez.push(niz[i]);
        
    }
}
console.log(rez);