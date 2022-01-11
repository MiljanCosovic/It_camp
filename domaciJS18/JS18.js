var niz=[];
var a =Number(prompt("Unesite broj ucenika:"));
for(var i=1;i<=a;i++)
{
    var b=Number(prompt("Unesite visine ucenika:", i));
    niz.push(b);
}
alert("Visine su: " +niz);
niz.sort();
alert("Najveca visina je: " + niz[niz.length - 1] );




 