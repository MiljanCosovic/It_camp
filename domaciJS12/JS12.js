var a=parseInt(prompt("Unesite broj: "));
var suma=0;
for(var i=1;i<=a;i++)
{
       var fakt = 1;
        for(j=1; j <=i; j++)
        fakt*= j;
        suma+=fakt;
}
alert(suma);
