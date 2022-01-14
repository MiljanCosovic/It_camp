var niz=[2,5,6,43,22,9,24,545,222,142]
suma=0;
console.log("Niz je:" +niz)
for(var i=0;i<niz.length;i++)
{
    if(niz[i]%2==0)
    {
        suma+=niz[i];
    }
}
console.log("Suma parnih brojeva je: " +suma);