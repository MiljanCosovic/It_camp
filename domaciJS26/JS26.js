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




// function tekst(){
//     let txt = 'the quick fox';
//     var niz=txt.split(" ");
//     for(i=0;i<niz.length;i++)
//     {
//         niz[i] = niz[i].charAt(0).toUpperCase() + niz[i].slice(1);
//     }

//     var txt2 = niz.join(" ");



//     console.log(txt2);

// }



// tekst();





function deli(iznos, novcanica){
   
    brojNovcanica = Math.floor(iznos / novcanica);

return brojNovcanica;
}
function broji(suma, novcanice)
{
for (let i = 0; i < novcanice.length; i++) {
    if(suma!=0){
        pom = parseInt(novcanice[i])
        var brNovcanica = deli(suma, pom);
        console.log(brNovcanica + " novcanica od " + pom + " dinara");
        var noviIznos = suma - (pom * brNovcanica)
    } 
    suma=noviIznos;
}
}
broji(2342,[200, 50, 25, 20, 5,2,1]);






