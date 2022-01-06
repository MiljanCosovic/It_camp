var f1 = 1;
 var f2 = 1;
 var suma=0;
 console.log(f1);
 console.log(f2);
 for(var i=1;i<=10;i++)
{
    f=f1+f2;
    f1=f2;
    f2=f;
    console.log(f);
}
