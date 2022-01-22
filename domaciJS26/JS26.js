// var niz=[2, "asdf",4,"bdf",3234];
// var rez=[];
// for(i=0;i<niz.length;i++)
// {
//     if(typeof niz[i]==="number")
//     {
//         rez.unshift(niz[i]);
//     }
//     else
//     {
//         rez.push(niz[i]);
//     }
// }
// console.log(rez);




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





