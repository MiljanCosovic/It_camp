// function digitize(n) {
    
//     n=n.toString()
//     var b=[]
//     for(var i=0;i<n.length;i++)
//     {
        
//         b.unshift(n[i]);
//     }
//     console.log(b);
//   }
//   digitize(1234);



// function najmanji(niz)
// {
//     min1=niz[0];
//     min2=niz[0]
//     for(el of niz)
//     {   
//       if(min1>el)
//       {
//           min1=el;
//       }
//       else if(min2>el && min1<el)
//       {
//           min2=el;
//       }
//     }
//     console.log(min1);
//     console.log(min2);
// }
// najmanji([2,4,51]);



// function find(niz)
// {
//     max=niz[0];
//     for(el of niz)
//     {
//         if(Math.abs(max)<=Math.abs(el))
//         {
//             max=el
//         }
//     }
//     console.log("Broj sa najvise cifara je: "+max);
// }

// find([2,44,1,4,-33])


// function niz(){
//     var data=[3,0,2,44,0,123,0,32,63]
//     for(let i=0;i<data.length;i++)
//     {
//         if(data[i]===0)
//         {
//             nula=data.splice(i,1);
//             data.push(0)
//         }
//     }
    
//     console.log(data);
// }
// niz()



function niz()
{
    data=[3,24,54,123,32,64];
    var b=0;

    for(i=0;i<data.length;i++)
    {
        b+=data[i];
    }
    c=b/data.length;
    console.log(c);
}

niz();