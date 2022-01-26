function tekst(){
    let txt = 'the quick fox';
    var niz=txt.split(" ");
    for(i=0;i<niz.length;i++)
    {
        niz[i] = niz[i].charAt(0).toUpperCase() + niz[i].slice(1);
    }
    var txt2 = niz.join(" ");
    console.log(txt2);
}
tekst();