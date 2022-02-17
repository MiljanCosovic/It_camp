
// function ima(prop){
//   covek={
//     name:"Miljan",
//     surname:"Ljanmi",
//     location:"Novi Pazar",
//     nickname:"Ljanmi",
//   }
//  if(prop in covek)
//  {
//     console.log("Objekat ima property");
//  }
//  else
//  {
//      console.log("Objekat nema propery");
//  }
// }
// ima("location");
// ima("lastname");


// function brise(o1,data)
// {

// delete o1[data];
// return o1;
// }
// console.log(brise(covek={name:"Miljan", prezime:"Cosovic",},"name"));





function data(biblioteka)
{
b=[];

for(i=0;i<biblioteka.length;i++)
{
  if(biblioteka[i].age > 18)
  
    b.push(biblioteka[i]);
}
  console.log(b);
}

data( [{
  author: "Bil Gates",
  title: "The road Ahead",
  reading: "false",
  age: 29,
},
{
  author: "Bil Gates",
  title: "The road Ahead",
  reading: "false",
  age : 22,
},
{
  author: "Bil Gates",
  title: "The road Ahead",
  reading: "false",
  age : 18,
},
{
  author: "Bil Gates",
  title: "The road Ahead",
  reading: "false",
  age : 12,
},
{
  author: "Bil Gates",
  title: "The road Ahead",
  reading: "false",
  age : 22,
},
{
  author: "Bil Gates",
  title: "The road Ahead",
  reading: "false",
  age : 10,
}]);