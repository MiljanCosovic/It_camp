function nbYear(p0, percent, aug, p) {
    var brojac=0;
    if(aug>0)
    {
    while(p0<=p)
    {
    p0=p0+(p0*(percent/100)+aug);
    brojac++
    }
    }
    else
    {
        return;
    }
    console.log(brojac)
}
nbYear(1000,2,50,1200);
nbYear(1500, 5, 100, 5000);
nbYear(1500000, 2.5, 10000, 2000000)
nbYear(1500000, 0.25, 1000, 2000000)

