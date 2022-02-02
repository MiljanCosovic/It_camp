function powersOfTwo(n){
    pomNiz=[];
    for(i=0;i<=n;i++)
    {
        pomNiz.push(2 ** i);
    }

    console.log(pomNiz);
}
powersOfTwo(10);